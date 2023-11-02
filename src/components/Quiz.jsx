import { useState } from "react";

export default function Quiz() {
    const [activeQuestionIndes, setActiveQuestionIndes] = useState(0);
    const [userAnswers, setUserAnswers] = useState();
    
    return (
        <p>Currently active Question</p>
    );
}