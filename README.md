# Simple CRUD API

*GET*, *POST*, *PUT*, *DELETE* operations are implemented.

----

## Endpoints: 

```/api/user``` - get all users, add user

```/api/user/{userId}``` - get, update or delete User by id

User's object:

```{
    id: string, uuid 
    userName: string, required
    age: number, required
    hobbies: array of strings or empty array, required
}```


----

##Scrtpts:

```npm script start:prod``` Starts the build process and then runs the bundled file


```npm script start:dev``` The application is run in development mode.