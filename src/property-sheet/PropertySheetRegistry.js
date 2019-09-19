import * as Heading from './Heading.sheet';
import * as Award from './Awards.sheet';
import * as Certification from './Certification.sheet';
import * as Education from './Education.sheet';
import * as Interest from './Interest.sheet';
import * as Language from './Language.sheet';
import * as Link from './Link.sheet';
import * as ProfileSummary from './ProfileSummary.sheet';
import * as Skill from './Skill.sheet';
import * as WorkHistory from './WorkHistory.sheet';
import * as NewSection from './NewSection.sheet';

const SheetRegistry = {
    heading: Heading,
    award: Award,
    certification: Certification,
    education: Education,
    interest: Interest,
    language: Language,
    link: Link,
    profileSummary: ProfileSummary,
    skill: Skill,
    workHistory: WorkHistory,
    new_section: NewSection
};

const fail = () => {
    throw new Error('Cannot find property sheet');
};

export default function lookUpModel(sectionType) {
    if (SheetRegistry[sectionType]) {
        return SheetRegistry[sectionType];
    }
    return fail();
}
