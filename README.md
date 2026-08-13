# cs2-dashboard

Personalized counter strike 2 analytics dashboard

# MVP

To be completed sequentially

- Needs to support file upload
- Needs to support Faceit API
- Built with React/Typescript/Node

## Potential dependancies

- https://demofile.dev/
  - demo file parsing
- Faceit API

## Frontend

- Drag and drop to manually upload demos (to be automated in the future, via steam match codes)

- General statistics
  - K/D/A
  - ADR
  - Swing %
  - HS #

- Advanced statistics
  - Spray %
  - Counter strafe %
  - Crosshair placement
  - etc.

- Analysis
  - Map statistics to analysis models
  - This needs to be explored further

- Pro comparsion
  - UI TBD
  - who is the player similar to based off their playstyle

- Coaching
  - LLM chat to understand specific ways to improve

## Backend

- Demo consumption
  - file upload
  - Auto fetching demos from recently played scrims/matches
