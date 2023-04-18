// import respective sections
import { cppSection } from './helloworldSections/cpp-section'
import { csharpSection } from './helloworldSections/csharp-section'
import { htmlSection } from './helloworldSections/html-section'
import { pythonSection } from './helloworldSections/python-section'

const helloworldSection = document.getElementById('helloworld-section')

const sectionLinks = [
  {
    name: 'C++',
    id: 'cpp-section',
  },
  {
    name: 'C#',
    id: 'csharp-section',
  },
  {
    name: 'Python',
    id: 'python-section',
  },
  {
    name: 'HTML',
    id: 'html-section',
  },
]

helloworldSection.innerHTML = `
    <ul>
        ${sectionLinks
          .map(
            (section) =>
              `
                <li>
                    <a href="#${section.id}" class="section-links">${section.name}</a>
                </li>
            `
          )
          .join('')}
    </ul>
    <hr>
    <section id="cpp-section">
        ${cppSection}
    </section>
    <hr>
    <section id="csharp-section">
        ${csharpSection}
    </section>
    <hr>
    <section id="python-section">
        ${pythonSection}
    </section>
    <hr>
    <section id="html-section">
        ${htmlSection}
    </section>
`
