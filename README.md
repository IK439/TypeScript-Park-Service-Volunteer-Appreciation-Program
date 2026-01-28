# TypeScript-Park-Service-Volunteer-Appreciation-Program

## Description
This program consolidates volunteer activity logs from two different parks—Raccoon Meadows and Wolf Point—into a unified format. It calculates total verified hours for each volunteer and sorts them in descending order, allowing easy tracking of contributions across multiple locations.

## Coding Techniques
- TypeScript type annotations for strong typing (`RaccoonMeadowsVolunteers`, `WolfPointVolunteers`, and activities)
- Union types and type casting to handle combined activity types
- Array mapping and filtering to transform and aggregate data
- Conversion of string IDs to numbers for consistency across datasets
- Conditional logic to verify activities (`Yes` / boolean true)
- Reduce function to calculate total hours per volunteer
- Sorting arrays by numerical values (`hours`) using custom comparator
- Modular imports and exports for structured data management

## Example Output
```
Combined Volunteers: [
  { id: 400, name: 'Sarah Galloway', activities: [ [Object] ] },
  {
    id: 401,
    name: 'Cormac Mcfarlane',
    activities: [ [Object], [Object] ]
  },
  { id: 402, name: 'Maisha Mcconnell', activities: [ [Object] ] },
  {
    id: 403,
    name: 'Joanna Reilly',
    activities: [ [Object], [Object] ]
  },
  { id: 100, name: 'Rose Sutton', activities: [ [Object], [Object] ] },
  { id: 101, name: 'Leigh Gilmour', activities: [ [Object] ] },
  { id: 102, name: 'Raj Wardle', activities: [ [Object] ] },
  {
    id: 103,
    name: 'Rayan Gutierrez',
    activities: [ [Object], [Object], [Object] ]
  }
]
Hours per Volunteer: [
  { id: 400, name: 'Sarah Galloway', hours: 7 },
  { id: 401, name: 'Cormac Mcfarlane', hours: 5 },
  { id: 402, name: 'Maisha Mcconnell', hours: 0 },
  { id: 403, name: 'Joanna Reilly', hours: 8 },
  { id: 100, name: 'Rose Sutton', hours: 3 },
  { id: 101, name: 'Leigh Gilmour', hours: 4 },
  { id: 102, name: 'Raj Wardle', hours: 6 },
  { id: 103, name: 'Rayan Gutierrez', hours: 5 }
]
Sorted by Hours: [
  { id: 403, name: 'Joanna Reilly', hours: 8 },
  { id: 400, name: 'Sarah Galloway', hours: 7 },
  { id: 102, name: 'Raj Wardle', hours: 6 },
  { id: 401, name: 'Cormac Mcfarlane', hours: 5 },
  { id: 103, name: 'Rayan Gutierrez', hours: 5 },
  { id: 101, name: 'Leigh Gilmour', hours: 4 },
  { id: 100, name: 'Rose Sutton', hours: 3 },
  { id: 402, name: 'Maisha Mcconnell', hours: 0 }
]
```
