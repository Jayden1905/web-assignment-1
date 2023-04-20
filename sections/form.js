const formSection = document.getElementById('form-section')

formSection.innerHTML = `
    <form id="form" action="https://translate.google.com" method="get">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required> <br>
        <label for="module_code">Module Code:</label>
        <input type="text" name="module_code" id="module_code"> <br>
        <label for="date">Date:</label>
        <input type="date" name="date" id="date" disabled> <br>

        <textarea rows="4" cols="10" name="text">Hello Test 202304</textarea>

        <br>
        Source language:
        <br>

        <input type="radio" id="English" name="sl" value="en" checked="checked">
        <label for="English">English</label> <br>
        <input type="radio" id="Malay" name="sl" value="ms">
        <label for="Malay">Malay</label>

        <br>
        Target language:
        <br>

        <input type="radio" id="Malay" name="tl" value="ms" checked="checked">
        <label for="Malay">Malay</label> <br>
        <input type="radio" id="Chinese" name="tl" value="zh">
        <label for="Chinese">Chinese</label> <br>
        <input type="radio" id="Japanese" name="tl" value="ja">
        <label for="Japanese">Japanese</label> <br>
        <input type="radio" id="Korean" name="tl" value="ko">
        <label for="Korean">Korean</label> <br>

        <button type="submit" value="Translate">Translate</button>
    </form>
    <div id="error"></div>
`
