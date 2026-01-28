import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log";

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from "./wolf-point-log";

// Union type for activities
type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

// Standardised type for volunteer
type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

// Combine volunteers from different sources into a unified format
function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
): Volunteers[] {
  return volunteers.map((volunteer) => {
    let id = volunteer.id;

    // Convert string IDs to number
    if (typeof id === "string") {
      id = parseInt(id, 10);
      if (isNaN(id)) id = 0;
    }

    return {
      id,
      name: volunteer.name,
      activities: volunteer.activities as CombinedActivity[],
    };
  });
}

// Check if an activity is verified
function isVerified(verified: string | boolean): boolean {
  return verified === true || verified === "Yes";
}

// Get the hours/time from an activity safely
function getHours(activity: CombinedActivity): number {
  if ("hours" in activity && typeof activity.hours === "number") {
    return activity.hours;
  } else if ("time" in activity && typeof activity.time === "number") {
    return activity.time;
  }
  return 0; // fallback if neither exists
}

// Calculate total hours for each volunteer
function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => ({
    id: volunteer.id,
    name: volunteer.name,
    hours: volunteer.activities.reduce(
      (total, activity) =>
        total + (isVerified(activity.verified) ? getHours(activity) : 0),
      0
    ),
  }));
}

// Sort helper to order volunteers by hours descending
function byHours(a: { hours: number }, b: { hours: number }): number {
  return b.hours - a.hours;
}

// Combine all volunteers into a single array
const combinedVolunteers = combineVolunteers([
  ...wolfPointVolunteers,
  ...raccoonMeadowsVolunteers,
]);

console.log("Combined Volunteers:", combinedVolunteers);

// Calculate total verified hours per volunteer
const result = calculateHours(combinedVolunteers);
console.log("Hours per Volunteer:", result);

// Sort volunteers by hours in descending order
console.log("Sorted by Hours:", result.sort(byHours));