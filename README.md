## Task overview

The interview is structured in 3 phases:

- task exploration
- creating the algorithm
- creating the frontend

## Run the project

To run the project locally:

- `yarn install`
- `yarn dev`

To compile and minify for production

- `yarn build`

## 1) Task exploration (15 mins)

Task exploration

- familiarize with the code base
- explain us how the app works so far

## 2) Shoes quiz: the algorithm (40 mins)

Build a quiz app to find the best fitting shoes.

We have provided you with two JSON files (questions.json and shoes.json in the assets folder). Depending on the answer given to each question:

- you update the ranking of the shoes. How much each shoe gains per answer is listed in the questions JSON file (ratingIncrease)
- you display the next question. You will find the nextQuestion in the JSON file.
- a null next question means the quiz is finished and you should present the results.
- the result should be the best fitting shoe (by ranking) on top, and then a list of the remaining suggested shoes, ordered by top to bottom ranking

## 3) Result screen - the frontend (30 mins)

Build the UI of the result screen according to result.png found in the public folder

- show the top ranked shoe
- show the similar suggested shoes in order of ranking
- show all the shoes details according to the design

## 4) Recap (5 mins)

5 mins buffer time to ask or answer any questions
