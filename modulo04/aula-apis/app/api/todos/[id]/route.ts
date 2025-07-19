import { NextRequest } from 'next/server';
import { todosData } from '@/app/lib/todos';
import { Todo } from '@/app/types/todo';

interface RouteParams {
  params: {
    id: string;
  };
}

// GET /api/todos/[id] - Buscar todo específico
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    // Validar se ID é um número válido
    if (isNaN(id)) {
      return Response.json(
        {
          success: false,
          error: 'Invalid ID format',
        },
        { status: 400 }
      );
    }

    const todo = todosData.getById(id);

    if (!todo) {
      return Response.json(
        {
          success: false,
          error: 'Todo not found',
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: todo,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to fetch todo',
      },
      { status: 500 }
    );
  }
}

// PUT /api/todos/[id] - Atualizar todo
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();

    // Validar se ID é um número válido
    if (isNaN(id)) {
      return Response.json(
        {
          success: false,
          error: 'Invalid ID format',
        },
        { status: 400 }
      );
    }

    // Validar dados recebidos
    const updates: Partial<Pick<Todo, 'title' | 'completed'>> = {};

    if (body.title !== undefined) {
      if (typeof body.title !== 'string' || body.title.trim().length === 0) {
        return Response.json(
          {
            success: false,
            error: 'Title must be a non-empty string',
          },
          { status: 400 }
        );
      }
      updates.title = body.title.trim();
    }

    if (body.completed !== undefined) {
      if (typeof body.completed !== 'boolean') {
        return Response.json(
          {
            success: false,
            error: 'Completed must be a boolean',
          },
          { status: 400 }
        );
      }
      updates.completed = body.completed;
    }

    // Verificar se tem algo para atualizar
    if (Object.keys(updates).length === 0) {
      return Response.json(
        {
          success: false,
          error: 'No valid fields to update',
        },
        { status: 400 }
      );
    }

    const updatedTodo = todosData.update(id, updates);

    if (!updatedTodo) {
      return Response.json(
        {
          success: false,
          error: 'Todo not found',
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: updatedTodo,
      message: 'Todo updated successfully',
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to update todo',
      },
      { status: 500 }
    );
  }
}

// DELETE /api/todos/[id] - Deletar todo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const id = parseInt(params.id);

    // Validar se ID é um número válido
    if (isNaN(id)) {
      return Response.json(
        {
          success: false,
          error: 'Invalid ID format',
        },
        { status: 400 }
      );
    }

    const deleted = todosData.delete(id);

    if (!deleted) {
      return Response.json(
        {
          success: false,
          error: 'Todo not found',
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: 'Failed to delete todo',
      },
      { status: 500 }
    );
  }
}
