import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import colors from '../styles/colors';
import Avatar from '../components/avatar';
import GithubSvg from '../components/svg/github';
import TwitterSvg from '../components/svg/twitter';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.text};
    background-color: ${colors.bkg};
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 10fr 1fr;
  grid-template-areas: 'content' 'footer';
`;
const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenteredLeft = styled(Centered)`
  justify-content: flex-start;
`;
const CenteredRight = styled(Centered)`
  justify-content: flex-end;
`;
const Content = styled(Centered)`
  grid-area: content;
`;
const FooterGrid = styled(Centered)`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
`;
const SpacingStack = styled.div`
  > * + * {
    ${props => {
      switch (props.size) {
        case 's':
          return 'margin: 4px 0 0;';
        case 'l':
          return 'margin: 16px 0 0;';
        case 'xl':
          return 'margin: 32px 0 0;';
        default:
          return 'margin: 8px 0 0;';
      }
    }};
  }
`;
const SpacingInline = styled.div`
  > * + * {
    ${props => {
      switch (props.size) {
        case 's':
          return 'margin: 0 0 0 4px;';
        case 'l':
          return 'margin: 0 0 0 16px;';
        case 'xl':
          return 'margin: 0 0 0 32px;';
        default:
          return 'margin: 0 0 0 8px;';
      }
    }};
  }
`;
const Profile = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;
const Text = styled.div`
  font-family: 'Courier New';
  text-align: center;
`;
const ProfileName = styled(Centered)`
  font-size: 1.4rem;
`;
const ProfileTitle = styled(Text)`
  font-size: 2rem;
`;
const TextHighlighted = styled(Text)`
  border: 1px solid ${colors.red};
  background: none;
  letter-spacing: 0.2rem;
  padding: 4px 8px;
  width: auto;
`;
const SocialLink = styled.a`
  cursor: pointer;
  > svg {
    fill: ${colors.red};
  }
  :hover {
    > svg {
      fill: ${colors.redDark};
    }
  }
`;
const DisableTrackingButton = styled.button`
  background: none !important;
  border: none;
  color: ${colors.link};
  cursor: pointer;
  font: inherit;
  padding: 0;
  text-decoration: underline;
`;

class IndexPage extends React.PureComponent {
  handleDisableTracking = () => {
    const shouldDisable = window.confirm(
      'This website uses technical cookies in order to improve the experience. The IP address is also anonymized.\n\nWould you still like to disable tracking?'
    );
    if (shouldDisable) window.gaOptout();
  };
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <Grid>
          <Content>
            <Profile>
              <SpacingStack size="l">
                <SpacingStack size="xl">
                  <ProfileName>
                    <TextHighlighted>{'Nicola Molinari'}</TextHighlighted>
                  </ProfileName>
                  <Centered>
                    <Avatar />
                  </Centered>
                  <ProfileTitle>{'Software Engineer'}</ProfileTitle>
                </SpacingStack>
                <Text>{'Technology enthusiast. I ❤️️ building things.'}</Text>
              </SpacingStack>
            </Profile>
          </Content>
          <FooterGrid>
            <CenteredLeft style={{ paddingLeft: '8px' }}>
              <SpacingInline size="m">
                <DisableTrackingButton
                  onClick={this.handleDisableTracking}
                  title="Disable Google Analytics Tracking"
                >
                  {'Tracking'}
                </DisableTrackingButton>
                <span role="img" aria-label="Emoji hand waving">
                  👋
                </span>
              </SpacingInline>
            </CenteredLeft>
            <Centered>
              <SpacingInline size="m">
                <SocialLink
                  href="https://github.com/emmenko"
                  rel="noopener"
                  title="Github account (emmenko)"
                >
                  <GithubSvg width="25" height="25" />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com/emmenko"
                  rel="noopener"
                  title="Twitter account (emmenko)"
                >
                  <TwitterSvg width="25" height="25" />
                </SocialLink>
              </SpacingInline>
            </Centered>
            <CenteredRight style={{ paddingRight: '8px' }}>
              &copy; {new Date().getFullYear()}
            </CenteredRight>
          </FooterGrid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default IndexPage;