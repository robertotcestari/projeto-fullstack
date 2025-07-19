import { NextRequest } from 'next/server';
import { todosData } from '@/app/lib/todos';

// GET /api/todos - Listar todos os todos
export async function GET() {
  try {
    const todos = todosData.getAll();

    return Response.json({
      success: true,
      data: todos,
      count: todos.length,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to fetch todos',
      },
      { status: 500 }
    );
  }
}

// POST /api/todos - Criar novo todo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validação básica
    if (!body.title || typeof body.title !== 'string') {
      return Response.json(
        {
          success: false,
          error: 'Title is required and must be a string',
        },
        { status: 400 }
      );
    }

    // Validar se title não está vazio
    if (body.title.trim().length === 0) {
      return Response.json(
        {
          success: false,
          error: 'Title cannot be empty',
        },
        { status: 400 }
      );
    }

    const newTodo = todosData.create(body.title.trim());

    return Response.json(
      {
        success: true,
        data: newTodo,
        message: 'Todo created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to create todo',
      },
      { status: 500 }
    );
  }
}
