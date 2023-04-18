const helloworldSection = document.getElementById('helloworld-section')

helloworldSection.innerHTML = `
    <ul>
        <li>
            <a href="#cpp-section" class="section-links">C++</a>
        </li>
        <li>
            <a href="#csharp-section" class="section-links">C#</a>
        </li>
        <li>
            <a href="#python-section class="section-links""> Python </a>
        </li>
        <li>
            <a href="#html-section class="section-links"">HTML</a>
        </li>
    </ul>
    <hr>
    <section id="cpp-section">
        <h1 class="section-header">
            C++
        </h1>
    <div class="section-container">
        <img src="./public/CPP-Language.png" alt="cpp">
        <pre class="code">
            <code>
                #include <iostream>
                using namespace std;
                int main() {
                    cout  &lt;&lt; "Hello World!";
                    return 0;
                }
            </code>
        </pre>
    </div>
    </section>
    <hr>
    <section id="csharp-section">
        <h1 class="section-header">
            C#
        </h1>
        <div class="section-container">
            <img src="./public/CS-Language.png" alt="csharp">
            <pre class="code">
                <code>
                    using System;
                    class program {
                    static void Main() {
                        Console.WriteLine("Hello World!");
                    }
                    }
                </code>
            </pre>
        </div>
    </section>
    <hr>
    <section id="python-section">
        <h1 class="section-header">
            Python
        </h1>
        <div class="section-container python">
            <img src="./public/Python-Language.jpg" alt="python">
            <pre class="code">
                <code>
                    # Hello World program in Python
                    print("Hello World!")
                </code>
            </pre>
        </div>
    </section>
    <hr>
    <section id="html-section">
        <h1 class="section-header">
            HTML
        </h1>
        <div class="section-container">
            <img src="./public/html-Language.png" alt="html">
            <pre class="code">
                <code>
                    &lt;html&gt;
                    &lt;head&gt;
                        &lt;title&gt;Hello&lt;/title&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                        &lt;p&gt;Hello World!&lt;/p&gt;
                    &lt;/body&gt;
                    &lt;/html&gt;
                </code>
            </pre>
        </div>
    </section>
    <hr>
`
