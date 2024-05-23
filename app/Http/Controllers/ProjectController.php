<?php

namespace App\Http\Controllers;

use App\Http\Requests\Project\StoreProjectRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate(10)->onEachSide(1);
        return inertia('Project/Index', [
            'projects' => ProjectResource::collection($projects)
        ]);
    }
    public function create()
    {
        //
    }
    public function store(StoreProjectRequest $request)
    {
        //
    }
    public function show(Project $project)
    {
        //
    }
    public function edit(Project $project)
    {
        //
    }
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }
    public function destroy(Project $project)
    {
        //
    }
}
