import React from "react";

export default function DisplayError({ error }) {
  return (
    <>
      {error ? (
        <p className="is-invalid">{error}</p>
      ) : (
        <p className="is-invalid opacity-0">NA</p>
      )}
    </>
  );
}

DisplayError.defaultProps = {
  error: "",
};
