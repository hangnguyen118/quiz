import { useState } from "react";

export default function SubmitButton() {
    const [isSubmit, setIsSubmit] = useState(false);
    function handleSubmit() {
        setIsSubmit(true);
    }
  return (
    <button onClick={handleSubmit}>
        {isSubmit ? "Submitted" : "Submit"}
    </button>
  )
}
