import './style.css'

const table = document.getElementById('table-section')

table.innerHTML = `
  <header class="section-header">Part 1:</header>
  <table>
    <tr>
      <th class="table-header" colspan="3">CSIT128 Assignment-1</th>
      <th class="table-header">Top G</th>
    </tr>
    <tr>
      <td class="stu-num" rowspan="3">
        Student Number <br />/ Name / Email
      </td>
      <td>8164782</td>
      <td class="name">Kyaw Za Yan Naing</td>
      <td class="email">kzyn392@uowmail.edu.au</td>
    </tr>
    <tr>
      <td>8221881</td>
      <td class="name">Soe Min Oo</td>
      <td class="email">smo787@uowmail.edu.au</td>
    </tr>
    <tr>
      <td>8218924</td>
      <td class="name">Kaung Myat Soe</td>
      <td class="email">kms965@uowmail.edu.au</td>
    </tr>
  </table>
`
