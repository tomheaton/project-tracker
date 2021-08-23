# project-tracker notes

## project goals
- bug tracker
- issue tracker
- user system
- assign users to issues etc.

## future plans
- migrate to typescript

## todo
- use routers/controllers for project and user CRUD methods


## routes
### Before User feature
```
all projects -> /projects
specific project -> /projects/{project_id}
```

### After User feature
After the User system has been implemented into the Project Tracker,
    displaying all projects owned by a particular user will be in the form of a list,
    while specific projects are a direct path from the user.
```
all projects (owned by a user) -> /{user_id}/projects
specific project -> /{user_id}/{project_id}
```