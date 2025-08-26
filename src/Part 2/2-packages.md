# Internal Packages

These shared packages come in a few different varieties. They can sometimes be essentially internal open-source packages, like forms-ui or zactive-directory. They can also be packages published by teams that are meant to help their downstream consumers, like candidate-data-contracts or noti-mailer. Or, a very common pattern used is to share types between a team’s backend and frontend, like egf-types or indie-api-types.

Internal seek packages are published privately under the @seek scope, and are published using gutenberg, which you can investigate for more information on npm at SEEK. To install private SEEK packages, you’ll need to be a member of the SEEK NPM org, which you can join by reading the description in our #npm channel.

```ts
export interface CandidateProfile {
  id: string;
  email: string;
  skills: string[];
  experience: ExperienceLevel;
}

export type ExperienceLevel = 'junior' | 'mid' | 'senior';
```

```ts
// Consumer code
import { CandidateProfile } from '@seek/candidate-data-contracts';

function processCandidateData(candidate: CandidateProfile) {
  // TypeScript provides full autocomplete and type checking
  return candidate.skills.filter(skill => skill.length > 0);
}
```

Example:
https://github.com/SEEK-Jobs/cm-packages/tree/master/packages
