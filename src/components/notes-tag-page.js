import React from 'react';

export default function NotesTagPage(props) {
  return (
    <div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
      <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
    </div>
  );
}
