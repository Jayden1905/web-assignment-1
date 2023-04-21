const formSection = document.getElementById('form-section')

formSection.innerHTML = `
    <form action="https://translate.google.com" id="form" method="get" onreset="gg()">
      <table>
        <tr>
          <td class="border-none">Name </td>
          <td class="border-none"><input type="text" pattern="[A-Za-z0-9]+" name="username" id="username"
              title="Must not contain special characters"></td>
        </tr>
        <tr>
          <td class="border-none">Module Code</td>
          <td class="border-none"><input type="text" pattern="^[A-Z][a-z][2-9]{3}$" name="module" id="username"></td>
        </tr>
        <tr>
          <td class="border-none">Current Date</td>
          <td class="border-none"><input type="" disabled id="Date"></td>
        </tr>
        <tr>
          <td class="border-none">Message</td>
          <td class="border-none"><textarea name="text" id="message" cols="10" rows="4">Hello Test 202304</textarea></td>
        </tr>
        <tr>
          <td class="border-none">Find</td>
          <td class="border-none"><input type="text" name="find" id="find"></td>
        </tr>
        <tr>
          <td class="border-none">Replace</td>
          <td class="border-none"><input type="text" name="replace" disabled id="replace"></td>
        </tr>
        <tr>
          <td class="border-none">
            <button id="change" type="button" disabled>Find and Replace</button>
          <td class="border-none" id="changeCount"></td>
          </td>
        </tr>
        <tr>
          <td class="border-none">
            <p>Source Language</p>
            <input id="ENG" type="radio" name="sl" value="en" checked>
            <label for="ENG">English</label>
            <br>
            <input id="MY" type="radio" name="sl" value="ms">
            <label for="MY">Malay</label>
          </td>
        </tr>
        <tr>
          <td class="border-none">
            <label for="targetlanguage">Target Language</label>
            <select id="targetlanguage" name="tl">
              <option value="zh-CN">Chinese</option>
              <option selected value="ms">Malay</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="border-none"><input type="submit" value="Translate"></td>
        </tr>
        <tr>
          <td class="border-none">
            <input type="button" id="reset-btn" value="reset">
          </td>
        </tr>
      </table>
  </form>
`
