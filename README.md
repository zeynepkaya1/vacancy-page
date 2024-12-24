# Studaro hiring case

## Objective

The objective of this case is to evaluate your skills in software development. We are looking for a full-stack developer, so we expect you to be able to work on both the frontend and the backend of a web application. Don't think about styling to much, we are more interested in the functionality of your application.

You have approximately 4 hours to work on this. We know this could be a tight deadline so don't feel bad if you can't do everything in this timespan. We are more interested in the quality of your work than the quantity.
The minimum requirements are to implement the candidate endpoints, the vacancies list in the frontend and one fully functional (validated) form to create or update a vacancy.

You can start by cloning this repository and working on the tasks described below. You can choose to make this into a mono-repo or create a separate repository for the frontend project.<br />
You can include any additional information you think is relevant in the README file. <br />
Please send us a link to your repository/repositories before the meeting. This way, we can take a look at your work in advance.

### Backend

This repository contains a simple backend application that has three endpoints: one that returns a list of vacancies, one that returns a single vacancy and one that allows you to create a vacancy. <br />
Your task is to create two new modules. One that allows you to create, read, update and delete candidates, as well as one to match them with vacancies. The candidate entity should have the following fields:

- First name \*
- Last name \*
- Email \*
- Phone
- Date of birth
- Other fields you think are relevant

Fields marked with \* are required.

The data can be stored in the index.ts file under FAKE DATA as well.

### Frontend

The frontend application is a simple Vue.js application that displays a list of vacancies and allows you to create a new one. <br />
The list should be sortable by the fields `title` and `created_at`, both in ascending and descending order. <br />
Develop a form to create or update vacancies as well. This can be one form or two separate forms, this choice is up to you. We will ask for your decision process later. <br />
Use the Zod library to validate the forms. You can find the documentation [here](https://zod.dev/).

The candidates or matches don't have to be included in the frontend project as long as you can demonstrate that the endpoints are working.

## About this repository

### Description

This repository uses the [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Project setup

```bash
$ pnpm install
```

### Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

### Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- To dive deeper and get more hands-on experience, check out the official video [courses](https://courses.nestjs.com/).
