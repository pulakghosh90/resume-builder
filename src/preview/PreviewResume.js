import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import Grid from '../components/layout/Grid';
import { If } from '../components/If';
import FlexContainer from '../components/layout/Container';
import List from '../components/list/List';

const Container = styled('div')`
    grid-area: main;
    border-left: 3px solid rgb(230, 232, 234);
    border-right: 3px solid rgb(230, 232, 234);
    height: 100%;
    width: 100%;
    padding: 10px;
`;

const SectionWrapper = styled('div')`
    margin: 5px;

    h3 {
        text-transform: uppercase;
    }
`;

const Box = styled(FlexContainer)`
    padding: 10px;
`;

const Link = ({ label, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"><h3>{label}</h3></a>
);

const Links = ({ links }) => (
    <SectionWrapper>
        {
            links.map(({ label, name, url }) => <Link key={name} label={label} href={url} />)
        }
    </SectionWrapper>
);

const PersonalDetail = ({ firstName, lastName, email, phone, address, }) => (
    <SectionWrapper>
        <h1>{`${firstName} ${lastName}`}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{address}</h3>
    </SectionWrapper>
);

const ProfileSummry = ({ label, summary }) => (
    <SectionWrapper>
        <h2>{label}</h2>
        <h4>{summary}</h4>
    </SectionWrapper>
);

const Skill = ({ skills }) => (
    <SectionWrapper>
        <h3>Skills</h3>
        <List value={skills} />
    </SectionWrapper>
);

const Education = ({ educations }) => (
    <SectionWrapper>
        <h3>Education</h3>
        <ul>
            {
                educations.map(({ school, city, state, degree, specialization, year }) => (
                    <li key={degree}>
                        {school}
                        <br />
                        {`${city}, ${state} - ${year}`}
                        <br />
                        {`${degree} - ${specialization}`}
                    </li>
                ))
            }
        </ul>
    </SectionWrapper>
);

const Certification = ({ certifications }) => (
    <SectionWrapper>
        <h3>Certifications</h3>
        <ul>
            {
                certifications.map(({ label, name, date, description }) => (
                    <li key={name}>
                        {`${label} (${date})`}
                        <br />
                        {description}
                    </li>
                ))
            }
        </ul>
    </SectionWrapper>
);

const Award = ({ awards }) => (
    <SectionWrapper>
        <h3>Awards</h3>
        <ul>
            {
                awards.map(({ label, name, date, description }) => (
                    <li key={name}>
                        {`${label} (${date})`}
                        <br />
                        {description}
                    </li>
                ))
            }
        </ul>
    </SectionWrapper>
);

const Interest = ({ interests }) => (
    <SectionWrapper>
        <h3>Interests</h3>
        <List value={interests} />
    </SectionWrapper>
);

const Language = ({ languages }) => (
    <SectionWrapper>
        <h3>Languages</h3>
        <List value={languages} />
    </SectionWrapper>
);

const WorkHistory = ({ histories }) => (
    <SectionWrapper>
        <h3>Work History</h3>
        {
            histories.map(({ company, designation, city, state, startDate, currentCompany, endDate, descriptions }) => (
                <div key={company} style={{ marginBottom: '10px' }}>
                    <h4>{`${company} - ${designation}`}</h4>
                    <h4>{`${city}, ${state} - ${startDate} - ${currentCompany ? 'Current' : endDate}`}</h4>
                    <List value={descriptions} />
                </div>
            ))
        }
    </SectionWrapper>
);

const Preview = (props) => {
    const columns = '1fr 2fr';
    const rows = '300px 5fr';
    const { resume: { sections } } = props;
    const {
        heading,
        link,
        profileSummary,
        skill,
        workHistory,
        education,
        certification,
        award,
        interest,
        language
    } = sections;
    return (
        <Container>
            <Grid height="100%" width="100%" columns={columns} rows={rows} gap={0}>
                <Box direction="vertical" halign="left" background="#f4d295">
                    <PersonalDetail {...heading} />
                    <Links {...link} />
                </Box>
                <Box direction="vertical" valign="middle" background="#fdf6eb">
                    <ProfileSummry {...profileSummary} />
                </Box>
                <Box direction="vertical" valign="top" halign="left" background="#fbedd5">
                    <Skill {...skill} />
                    <Education {...education} />
                    <Certification {...certification} />
                    <Award {...award} />
                    <Interest {...interest} />
                    <Language {...language} />
                </Box>
                <Box halign="left" valign="top">
                    <WorkHistory {...workHistory} />
                </Box>
            </Grid>
        </Container>
    );
};

function Previewer({ resume, loading }) {
    return (
        <If test={!loading}>
            <Preview resume={resume} />
        </If>
    );
}

export default connect(({ builder }) => builder)(Previewer);
