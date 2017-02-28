function saveData(){
	
	var teacherFirstNameValue = document.getElementById("teacherfirstname").value;
	localStorage.setItem("teacherfirstname", teacherFirstNameValue);
	
	var teacherLastNameValue = document.getElementById("teacherlastname").value;
	localStorage.setItem("teacherlastname", teacherLastNameValue);
	
	var teacherSchoolNameValue = document.getElementById("teacherschool").value;
	localStorage.setItem("teacherschool", teacherSchoolNameValue);
	
	var teacherSchoolZipCodeValue = document.getElementById("teacherzipcode", teacherSchoolZipCodeValue);
	
	var teacherPasswordValue = document.getElementById("teacherpassword").value;
	localStorage.setItem("teacherpassword", teacherPasswordValue);
	
	var teacherPasswordConfirmationValue = document.getElementById("teacherpasswordconfirmation").value;
	localStorage.setItem("teacherpasswordconfirmation", teacherPasswordConfirmationValue);

	alert("Thank you for registering for TeacherTalk!");
	
}
