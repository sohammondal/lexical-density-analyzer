# VAI Trade Backend Developer Challenge - Lexical Density

## Configuration
- rename `sample-.env` file to `.env`
- update the MongoDB URI and PORT or leave it as it is 
- that's all for now 😄 

## Running the project

- `npm install` installs dependencies
- `npm run pre-requisite` stores non-lexical words in the db. **one time task**.
- `npm start` starts project in `http://localhost:8002/`
- `npm run start:dev` starts project in Development mode (restarts on change)
- `npm run test` run tests

## System Requirements

- nodejs
- mongodb

## API Routes

- [POST] /complexity
  - Returns the overall lexical complexity of a submitted json via request
  - request:
  ```json
    {
        "text": "Kim loves going to the cinema"
    }
  ```
  - response: 
  ```json
    {
        "data": {
            "overall_ld": 0.67
        }
    }
  ```
- [POST] /complexity?mode=verbose
  - Returns the lexical complexity broken down into sentences
  - request:
  ```json
    {
        "text": "You should choose a text that you think is interesting. Maybe you like reading about history, or maybe you find the news more interesting. Lots of students like to read fiction, like stories or novels.You must also choose a text that is right for your English level. If the reading is too difficult, you will be frustrated and you will not enjoy your reading practice.Finally, you should choose a text that is short."
    }
  ```
  - response: 
  ```json 
    {
        "data": {
            "sentence_ld": [
                0.5,
                0.64,
                0.74,
                0.62
            ],
            "overall_ld": 0.64
        }
    }
  ```
- [GET] /non-lexical-word
  - Returns a list of non-lexical words
  - response:
  ```json
    {
        "data": [
            {
                "_id": "5e47b61ddd947a4eb052e405",
                "word": "have"
            },
            {
                "_id": "5e47b61ddd947a4eb052e404",
                "word": "is"
            }
        ]
    }
  ```
- [POST] /non-lexical-word
    - **TO-DO** - Make it a protected endpoint using JWT Authentication
    - Adds a new non-lexical word
    - request:
        ```json
        {
            "word": "tata"
        }
        ```
    - response:
        ```json
       {
            "data": {
                "createdAt": "2020-02-15T10:47:10.301Z",
                "_id": "5e47cc38e205242ce8154db1",
                "word": "tata",
                "__v": 0
            }
        }
        ```

## Folder Structure and naming convention

- `package.json` contains dependencies, node scripts and project description
- `index.js` entry point of the app
- `pre-requisite.js` initialize database with non-lexical words
- `config` stores env configuration
- `src/database/` contains mongodb database configuration
- `src/middlewares/` contains express middlewares like timeLogger, errorHandler, etc
- `src/controllers/` contains controllers
- `src/services/` contains business logic
- `src/models/` contains ORM models (mongoose schemas)
- `src/routes/` contains routes
- `src/util/` contains a local copy of the non-lexical words
- `src/__tests__/` contains the test files