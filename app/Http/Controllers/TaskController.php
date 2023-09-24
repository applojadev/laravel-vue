<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    //all tasks
    public function index()
    {
        $tasks = Task::all();

        return response()->json($tasks);
    }
    
    //create new task 
    public function create(Request $request)
    {
        
        $task = new Task;
        $task->title = $request->get('title');
        $task->description = $request->get('description');
        $task->save();

        return response()->json('The task was successfully added');

    }

    //edit Task
    public function edit($id)
    {

        $task = Task::find($id);
        return response()->json($task);
        
    }

    //update task
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $task->title = $request->get('title');
        $task->description = $request->get('description');
        $task->save();

        return response()->json('The task was updated successfully');
    }

    //delete task
    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();

        return response()->json('The task was deleted successfully');
    }
    
}