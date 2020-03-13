var student = new Object();
      student.fName = "Will";
      student.lName = "Smith";
      student.id = 4;
      student.markE = 87;
      student.markM = 99;
      student.markS = 94;
      student.calculateAverage = function()
      {
      	return (student.markE + student.markM + student.markS)/3;
      };
      student.displayDetails = function()
      {
        document.write("Student Id: " + student.id + "<br />");
        document.write("Name: " + student.fName + " " + student.lName + "<br />");
        var avg = student.calculateAverage();
        document.write("Average Marks: " + avg);
      };
		student.displayDetails();