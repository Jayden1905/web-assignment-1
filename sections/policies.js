const links = {
  plagiarism:
    'https://www.uow.edu.au/student/support-services/learning-development/plagiarism/',
  academicConsiderations:
    'https://www.uow.edu.au/student/admin/academic-consideration/portal/',
  studentSupport: 'https://www.uow.edu.au/student/support-services/advisers/',
  disabilitiesSupport:
    'https://www.uow.edu.au/student/support-services/disability/',
}

const policiesSection = document.getElementById('policies-section')

policiesSection.innerHTML = `
    <h3 class="policies-header">Plagiarism</h3>
    <p class="policies-content">Plagiarism is treated seriously. If we suspect any work is copied, all students
        involve are likely to recieve
        zero for the entire assignment. Plagiarism has led to students being expelled from the University.
        <br>
        Please click <a href="${links.plagiarism}" target="_blank">here</a> to read more about plagiarism.
    </p>
    <h3 class="policies-header">Academic Consideration</h3>
    <p class="policies-content">
        We know life isn't perfect and there may be a time when you can't hand in an assignment on time, or make it to
        class or an exam. If you find yourself in a situation like this, you may be eligible for Academic Consideration.
        Academic Consideration is designed to help students when they are sick, injured, or where a serious, unplanned
        situation has occured that has affected their ability to study.
        <br>
        Please click <a href="${links.academicConsiderations}" target="_blank">here</a> to read more about Academic Consideration.
    </p>
    <h3 class="policies-header">Student Support Advisers</h3>
    <p class="policies-content">
        If you have an issue or a problem that is affecting your study, then the Student Support Advisers may be able to
        help. There are Student Support Advisers available to assist students who are studying at all UOW Campuses and
        in all UOW Faculties.
        <br>
        Please click <a href="${links.studentSupport}" target="_blank">here</a> to read more about Student Advisers.
        <br>
        <br>
        Student Support Adviser contact details for Faculty of Engineering and Information Sciences:
    </p>
    <div class="adviser">
    <table class="adviser-table">
        <tr>
        <td class="adviser-column">
            <h4>Ann-Maree Smith</h4>
            <p>Bld 40:133, Wollongong Campus</p>
            <p>(02) 4221 4714</p>
            <p>Mon- Fri</p>
            <p>ams@uow.edu.au</p>
        </td>
        <td class="adviser-column">
            <h4>Mitz Perez</h4>
            <p>Bld 4:105, Wollongong Campus</p>
            <p>(02) 4221 3833</p>
            <p>Mon-Fri</p>
            <p>mperez@uow.edu.au</p>
        </td>
        </tr>
    </table>
    </div>
    <h3 class="policies-header">Disability Services</h3>
    <p class="policies-content">
        Disability Services provide advice and support for students with a disability or health condition. Our aim is to
        ensure students with a disability realise their full academic potential. We also provide support for those who
        are the primary carers for those with a medical condition or disability.
        <br>
        Please click <a href="${links.disabilitiesSupport}" target="_blank">here</a> to read more about Disability Services.
    </p>
`
