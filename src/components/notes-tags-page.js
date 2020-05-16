import React from 'react';

export default function NotesTagsPage(props) {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
}
