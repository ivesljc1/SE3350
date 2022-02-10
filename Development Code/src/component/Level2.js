import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import SortingComponent from "./SortingComponent";
import ScoreIndicator from "./ScoreIndicator";

function Level2() {
  const [currentProblem, setCurrentProblem] = useState([]);//unsorted array
  const [sortedArray,setSortedArray]=useState([1,2,3,4]);//sorted array after merge sort
  const [answerArray,setAnswerArray]=useState([1,2,3,4]);//player's answer
  const [timeLeft,setTimeLeft]=useState(0);
  console.log('level2'>currentProblem);

  return (
    <div>
      <div class="ms-3">
        <h1>Level 2: MergeSort Algorithm</h1>
      </div>
      {/* pass the number array from HeaderLevel component to Level1 component */}
      <HeaderLevel callbackSetProblems={setCurrentProblem} />
      <div class="d-flex justify-content-center">
        <SortingComponent Problem={currentProblem} />
      </div>
      <div class="fixed-bottom d-flex justify-content-center">
        {/* <BottomInstructions /> */}
      </div>
      {/* calculate score */}
      <ScoreIndicator sortedArray={sortedArray} answerArray={answerArray} timeLeft={timeLeft}/>
     
      
    </div>
  );
}

export default Level2;
