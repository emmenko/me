import React from 'react';

export default function NotesPage(props) {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
}
