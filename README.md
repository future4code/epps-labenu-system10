# Projeto Labenu System
### Integrantes:
- Ástrid Bemporad
- Victor Pudo
- Wilson Ferreira


## How to use the API?
## To use our API endpoints you can follow these inscructions:
localhost port is `3003`

### `GET` Method
endpoint route is `/students`

This is a Success case of a `response` from the `GET` _Method_:
```
[
    {
        "id": 1,
        "name": "Will SQL",
        "email": "email@willsql.com",
        "birth_date": "2005-05-02T03:00:00.000Z",
        "hobby": "Leitura",
        "class_id": 1
    },
    {
        "id": 2,
        "name": "Ástrid SQL",
        "email": "abemporad@gmail.com.br",
        "birth_date": "1994-01-25T02:00:00.000Z",
        "hobby": "Botânica",
        "class_id": 2
    },
    {
        "id": 3,
        ...
    }
]
```

### `GET` Method By Id
endpoint route is `/student/:id`

The `Id` parameter is passed as a `pathParam` on the route.

This is a Success case of a `response` from the `GET` _Method_:
```
{
    "student": {
        "id": 5,
        "name": "Astro Dev",
        "email": "astro@dev.com",
        "birth_date": "1995-03-14T03:00:00.000Z",
        "hobby": "Astronautizar",
        "class_id": 2
    },
    "age": 26
}
```

### `POST` Method
endpoint route is `/students`

This is the expected object to create a new student:
```
{
    "name": "Astro Dev",
    "email": "astro@dev.com",
    "birth_date": "1995-03-14",
    "hobby": "Astronautizar",
    "class_id": 2
}
```

This is a Success case of a `response` from the `POST` _Method_:
```
{
    "message": "Success!",
    "student": {
        "name": "Astro Dev",
        "email": "astro@dev.com",
        "birth_date": "1995-03-14",
        "class_id": 2,
        "hobby": "Astronautizar"
    }
}
```

### `PUT` Method
endpoint route is `/student/:id`

This is the expected object to change a student's class:
```
{
    "class_id": 3
}
```

This is a Success case of a `response` from the `PUT` _Method_:
```
{
    "message": "Success!",
    "classId": 3
}
```

# Enunciado do projeto
## LabenuSystem:

As funcionalidades são:

→ `POST` Criar estudante;

→ `POST` Criar docente;

→ `POST` Criar turma;

→ `PUT` Adicionar estudante na turma;

→ `PUT` Adicionar docente na turma;

→ `GET` Pegar a idade de algum estudante a partir do id;

→ `GET` Exibir todos os estudantes;

→ `GET` Exibir todos os docentes;

→ `GET` Exibir todas as turmas;

→ `GET` Exibir estudantes de uma turma;

→ `GET` Exibir docentes de uma turma;

→ `GET` Exibir estudantes que possuam o mesmo hobby;

→ `DELETE` Remover estudante de uma turma;

→ `DELETE` Remover docente de uma turma;

→ `DELETE` Remover estudante;

→ `PUT` Mudar módulo da turma;


Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.
