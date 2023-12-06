import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function SuggestedSearchBar() {
  const [searchInputSuggested, setSearchInputSuggested] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInputSuggested(e.target.value.toLowerCase());
  };

  const handleSubmitSuggested = (e) => {
    e.preventDefault();
    if (searchInputSuggested !== '') router.push(`/searchsuggested/${searchInputSuggested}`);
    setSearchInputSuggested('');
  };

  return (
    <Form id="search-bar" className="search-bar" onSubmit={handleSubmitSuggested}>
      <FormControl type="text" placeholder="Search Suggested Moments" size="med" onChange={handleChange} value={searchInputSuggested} />
    </Form>
  );
}
