document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('classbook-container');
    const indexPath = 'index.json';

    // Função para criar o card de estudante
    function createStudentCard(student) {
        const card = document.createElement('div');
        card.classList.add('student-card');

        const img = document.createElement('img');
        img.src = student.image;
        // Fallback simples para imagem quebrada
        img.alt = `Foto de ${student.name}`;
        img.onerror = () => {
            img.src = 'https://placehold.co/600x400';
            img.alt = `Imagem de ${student.name} não encontrada`;
        };

        const name = document.createElement('h2');
        name.textContent = student.name;

        card.appendChild(img);
        card.appendChild(name);

        return card;
    }

    // Função para buscar e processar os dados
    async function loadStudentData() {
        try {
            // 1. Buscar o arquivo de índice
            const indexResponse = await fetch(indexPath);
            if (!indexResponse.ok) {
                throw new Error(`Erro ao buscar o índice: ${indexResponse.statusText}`);
            }
            const indexData = await indexResponse.json();

            // 2. Buscar cada arquivo JSON de estudante listado no índice
            const studentPromises = indexData.student_files.map(async (filePath) => {
                try {
                    const studentResponse = await fetch(filePath);
                    if (!studentResponse.ok) {
                        console.error(`Erro ao buscar ${filePath}: ${studentResponse.statusText}. Pulando este aluno.`);
                        return null; // Retorna null se um arquivo individual falhar
                    }
                    return await studentResponse.json();
                } catch (error) {
                    console.error(`Erro ao processar o arquivo ${filePath}:`, error);
                    return null; // Retorna null em caso de erro na busca ou parse
                }
            });

            // 3. Aguardar todas as buscas individuais
            const studentResults = await Promise.all(studentPromises);

            // 4. Filtrar resultados nulos (arquivos que falharam)
            const validStudents = studentResults.filter(student => student !== null && student.name && student.image);

            // 5. Limpar container e adicionar os cards válidos
            container.innerHTML = ''; // Limpa o container caso haja algo
            if (validStudents.length === 0 && indexData.student_files.length > 0) {
                container.textContent = 'Nenhum dado de aluno válido foi encontrado. Verifique os arquivos JSON e o console para erros.';
            } else if (validStudents.length === 0) {
                 container.textContent = 'Nenhum aluno adicionado ainda.';
            } else {
                validStudents.forEach(student => {
                    const card = createStudentCard(student);
                    container.appendChild(card);
                });
            }

        } catch (error) {
            console.error('Erro geral ao carregar dados dos alunos:', error);
            container.innerHTML = `<p style="color: red;">Ocorreu um erro ao carregar os dados. Verifique o console (F12) para mais detalhes e se o arquivo ${indexPath} existe e está correto.</p>`;
        }
    }

    // Iniciar o carregamento dos dados
    loadStudentData();
}); 