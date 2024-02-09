$(document).ready(function () {
  let index = 0;

  let data = [
    {
      quesNumber: "1/10",
      questions: "./images/ques/q1",
      ans: "",
    },
    {
      quesNumber: "2/10",
      questions: "./images/ques/q2",
      ans: "13",
    },
    {
      quesNumber: "3/10",
      questions: "./images/ques/q3",
      ans: "26",
    },
    {
      quesNumber: "4/10",
      questions: "./images/ques/q4",
      ans: "1",
    },
    {
      quesNumber: "5/10",
      questions: "./images/ques/q5",
      ans: "3",
    },
    {
      quesNumber: "6/10",
      questions: "./images/ques/q6",
      ans: "THIS",
    },
    {
      quesNumber: "7/10",
      questions: "./images/ques/q7",
      ans: "8",
    },
    {
      quesNumber: "8/10",
      questions: "./images/ques/q8",
      ans: "121",
    },
    {
      quesNumber: "9/10",
      questions: "./images/ques/q9",
      ans: "55",
    },
    {
      quesNumber: "10/10",
      questions: "./images/ques/q10",
      ans: "7",
    },
  ];
  function initialSetup() {
    $(".questions").attr("src", data[index].questions);
    $("#quesNumber").text(data[index].quesNumber);
    $("#enter_ans").val() == data[index].ans;
  }
  initialSetup();

  $("#sub_btn").click(function () {
    if (index == 0) {
      index++
      $(".questions").attr("src", data[index].questions);
      $("#quesNumber").text(data[index].quesNumber);
      $(".name").text($("#enter_ans").val());
      $("#enter_ans").val("");
    }
    else if ($("#enter_ans").val().toUpperCase() === data[index].ans) {

      if (index === data.length - 1) {
        $(".gameOverContainer").addClass("gameOverContainer2");
        return;
      }
      // data[0].ans = prompt("");
      setTimeout(() => {
        index++;
        $(".questions").attr("src", data[index].questions);
        $("#quesNumber").text(data[index].quesNumber);
        $("#enter_ans").val("");
      }, 1000);

      $(".correctAnsContainer").addClass("correctAnsContainer2");
      setTimeout(function () {
        $(".correctAnsContainer").removeClass("correctAnsContainer2");
      }, 2000);
    }
    else {

      $(".wrongAnsContainer").addClass("wrongAnsContainer2");
      setTimeout(function () {
        $(".wrongAnsContainer").removeClass("wrongAnsContainer2");
      }, 2000);
    }
  });
});
