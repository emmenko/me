import { Themed } from 'theme-ui';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Box } from '@theme-ui/components';
import codeBlockParseOptions from '../utils/code-block-parse-options';

const getLineStyles = (options) => {
  let promptLineStyles = {};
  let highlightLineStyles = {};
  if (options.isCommandLine) {
    promptLineStyles = {
      ml: [2],
      '::before': {
        content: 'attr(data-prompt)',
        ml: [-3],
        mr: [2],
        pt: [1],
        color: options.shouldShowPrompt ? 'secondary' : 'transparent',
      },
    };
  }
  if (options.shouldHighlightLine) {
    highlightLineStyles = {
      backgroundColor: 'highlight',
      width: options.isCommandLine ? `calc(100% - 8px)` : '100%',
    };
  }
  return { ...promptLineStyles, ...highlightLineStyles };
};

const languageAliases = {
  sh: 'bash',
  zsh: 'bash',
  console: 'bash',
  terminal: 'bash',
  curl: 'bash',
  js: 'javascript',
  yml: 'yaml',
};

const Code = ({ children, className: outerClassName, ...props }) => {
  const [languageToken] = (outerClassName || 'language-text').split(' ');
  const [, languageCode = 'text'] = languageToken.split('language-');
  const { title, highlightLines, noPromptLines } = codeBlockParseOptions(props);
  const content = children.trim();
  const language = languageAliases[languageCode] || languageCode;
  const isCommandLine = ['terminal', 'console'].includes(languageCode);

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'secondary',
        borderRadius: '4px',
        mb: 4,
      }}
    >
      <Highlight
        {...defaultProps}
        {...props}
        code={content}
        language={language}
        theme={undefined}
      >
        {({
          className,
          style,
          tokens: syntaxTokens,
          getLineProps,
          getTokenProps,
        }) => (
          <Box
            sx={{
              margin: 0,
              padding: 0,
              overflow: 'auto',
            }}
          >
            {title && (
              <Box
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'secondary',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                  backgroundColor: 'muted',
                  color: 'code',
                  fontWeight: 'medium',
                  paddingY: 2,
                  paddingX: 3,
                }}
              >
                {title}
              </Box>
            )}
            <Themed.pre
              className={`${outerClassName} ${className}`}
              style={style}
              sx={{
                fontSize: [1, 2],
                width: '100%',
                whiteSpace: 'pre-wrap',
                margin: 0,
                padding: 3,
              }}
            >
              {syntaxTokens.map((line, index) => {
                const isLastLine = syntaxTokens.length - 1 === index;
                if (isLastLine) {
                  if (line.length === 1 && line[0].empty) {
                    return null;
                  }
                }
                const shouldShowPrompt = isCommandLine
                  ? !noPromptLines.includes(index + 1)
                  : false;
                const shouldHighlightLine =
                  highlightLines && highlightLines.length > 0
                    ? highlightLines.some(
                        (highlightine) => highlightine === index + 1
                      )
                    : false;

                return (
                  <div
                    key={index}
                    {...getLineProps({
                      line,
                      key: index,
                      ...(isCommandLine ? { 'data-prompt': '$' } : {}),
                    })}
                    sx={getLineStyles({
                      isCommandLine,
                      shouldShowPrompt,
                      shouldHighlightLine,
                    })}
                  >
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({ token, key })}
                        sx={
                          token.empty ? { display: 'inline-block' } : undefined
                        }
                      />
                    ))}
                  </div>
                );
              })}
            </Themed.pre>
          </Box>
        )}
      </Highlight>
    </Box>
  );
};

export default Code;
