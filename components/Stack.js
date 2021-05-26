import Image from 'next/image';

const Stack = () => (
  <>
    <h1 className="my-4 text-2xl font-bold text-skin-title text-start md:text-4xl tracking-tigh dark:text-skin-inverted">
      My Current Development Equipment
    </h1>

    <div>
      <h2 className="my-4 text-xl font-semibold text-skin-accent">
        👉🏽 Current Hardware
      </h2>
      <ul>
        <li>
          <span className="font-bold text-skin-title dark:text-skin-inverted">
            Laptop/Mac:{' '}
          </span>
          <a
            href="https://www.amazon.com/2020-Apple-Mini-256GB-Storage/dp/B08N5PHB83/ref=sr_1_3?dchild=1&keywords=mac+mini+m1&qid=1621892679&sr=8-3"
            className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
          >
            Mac Mini M1 2020
          </a>
        </li>
        <li>
          <span className="font-bold text-skin-title dark:text-skin-inverted">
            Monitor:{' '}
          </span>
          <a
            href="https://www.amazon.com/Samsung-27-Inch-Frameless-Monitor-LC27R500FHNXZA/dp/B07RNMNWSY/ref=sr_1_2?crid=K2K8QYZUOWZZ&dchild=1&keywords=samsung+curved+27+inch+monitor&qid=1621892793&sprefix=samsung+curve+27+%2Caps%2C235&sr=8-2"
            className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
          >
            Dual Samsung Curve 27" monitors
          </a>
        </li>
        <li>
          <span className="font-bold text-skin-title dark:text-skin-inverted">
            Keyboard & Mouse:{' '}
          </span>
          <a
            href="https://www.amazon.com/Logitech-Wireless-Keyboard-Master-Bundle/dp/B089QQQL9Z/ref=sr_1_2?crid=3B14SI8E911C2&dchild=1&keywords=logitech+mx+master+3+keys&qid=1621893205&sprefix=logitech+mx%2Caps%2C236&sr=8-2"
            className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
          >
            Logitech MX Keys (Keyboard) - Logitech MX Master 3 (Mouse)
          </a>
        </li>
      </ul>
    </div>
    {/* <div>
      <h2 className="my-4 text-xl font-semibold text-skin-accent">
        👉🏽 Current Technologies I know
      </h2>

      <table className="min-h-full mx-auto table-auto">
        <thead className="justify-center">
          <tr className="border-2 bg-skin-fill">
            <th className="px-16 py-2 text-skin-inverted">
              <span>Uses</span>
            </th>
            <th className="px-16 py-2 text-skin-inverted">
              <span>Languages / Frameworks</span>
            </th>
          </tr>
        </thead>
        <tbody className="text-center bg-gray-200 text-skin-base">
          <tr className="bg-white border-2 border-gray-200">
            <td className="items-center px-16 py-2">Languages I speak</td>
            <td className="flex items-center justify-around px-16 py-2">
              <span>
                <Image
                  src="/static/logos/javascript.svg"
                  width={60}
                  height={60}
                />
              </span>
              <span>
                <Image
                  src="/static/logos/typescript.svg"
                  width={60}
                  height={60}
                />
              </span>
              <span>
                <Image src="/static/logos/python.svg" width={60} height={60} />
              </span>
            </td>
          </tr>
          <tr className="bg-white border-2 border-gray-200">
            <td className="items-center px-10 py-2">Frontend Development</td>
            <td className="flex items-center justify-around px-16 py-2">
              <span>
                <Image src="/static/logos/html.svg" width={60} height={60} />
              </span>
              <span>
                <Image src="/static/logos/vue.svg" width={60} height={60} />
              </span>
              <span>
                <Image src="/static/logos/react.svg" width={60} height={60} />
              </span>
            </td>
          </tr>
          <tr className="bg-white border-2 border-gray-200">
            <td className="items-center px-16 py-2">Backend Development</td>
            <td className="flex items-center justify-around px-16 py-2">
              <span>
                <Image src="/static/logos/node.svg" width={60} height={60} />
              </span>
              <span>
                <Image src="/static/logos/django.svg" width={60} height={60} />
              </span>
            </td>
          </tr>
          <tr className="bg-white border-2 border-gray-200">
            <td className="items-center px-16 py-2">Databases</td>
            <td className="flex items-center justify-around px-16 py-2">
              <span>
                <Image
                  src="/static/logos/firebase.svg"
                  width={60}
                  height={60}
                />
              </span>
              <span>
                <Image src="/static/logos/mongo.svg" width={60} height={60} />
              </span>
              <span>
                <Image
                  src="/static/logos/postgres.svg"
                  width={60}
                  height={60}
                />
              </span>
            </td>
          </tr>
          <tr className="bg-white border-2 border-gray-200">
            <td className="items-center px-16 py-2">Styling</td>
            <td className="flex items-center justify-around px-16 py-2">
              <span>
                <Image src="/static/logos/css.svg" width={60} height={60} />
              </span>
              <span>
                <Image src="/static/logos/sass.svg" width={60} height={60} />
              </span>
              <span>
                <Image
                  src="/static/logos/tailwindcss.svg"
                  width={60}
                  height={60}
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div> */}
  </>
);

export default Stack;
