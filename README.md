<h1 align="center" style="font-weight: bold;">The News Tech API 💻</h1>

<p align="center">
 <a href="#technologies">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>A REST API that sends daily emails to subscribers with the latest technology news.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/Robson-Carvalho/thenews-tech-backend?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Robson-Carvalho/thenews-tech-backend?style=social" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/Robson-Carvalho/thenews-tech-backend" alt="GitHub Issues">
  <img src="https://img.shields.io/github/actions/workflow/status/Robson-Carvalho/thenews-tech-backend/ci.yml?branch=main" alt="Build Status">
  <img src="https://img.shields.io/github/license/Robson-Carvalho/thenews-tech-backend" alt="License">
</p>

<h2 id="technologies">💻 Technologies</h2>

- Node.js
- Express
- Node-Cron
- PostgreSQL
- Nodemailer
- TypeScript

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/)

<h3>Cloning</h3>

```bash
git clone https://github.com/Robson-Carvalho/thenews-tech-backend.git
```

<h3>Config .env variables</h3>

Use the `.env.example` as reference to create your configuration file `.env` with the required variables:

```yml
PORT=
DATABASE_URL=

EXTERNAL_NEWS_API=
UNSUBSCRIBER_LINK=

NODEMAILER_EMAIL_USER=
NODEMAILER_PASSWORD=
```

<h3>Starting</h3>

```bash
cd thenews-tech-backend
npm install
npm start
```

<h2 id="routes">📍 API Endpoints</h2>

| Route                           | Method | Description                         |
| ------------------------------- | ------ | ----------------------------------- |
| <kbd>POST v1/subscriber</kbd>   | POST   | Subscribes a user to the newsletter |
| <kbd>GET v1/subscriber</kbd>    | GET    | Returns the number of subscribers   |
| <kbd>DELETE v1/subscriber</kbd> | DELETE | Unsubscriber                        |

<h3 id="post-subscribe">POST v1/subscriber</h3>

**REQUEST**

```json
{
  "email": "example@email.com"
}
```

**RESPONSE**

```json
{
  "status": "Success",
  "message": "Registered"
}
```

<h3 id="get-subscribers-count">GET v1/subscriber/count</h3>

**RESPONSE**

```json
{
  {
    "status": "Success",
    "data": {
      "count": 1
    }
  }
}
```

<h3 id="delete-subscribers">DELETE v1/subscriber</h3>

**REQUEST**

```json
{
  "email": "example@email.com"
}
```

**RESPONSE**

```json
{
  "status": "Success",
  "message": "Deleted"
}
```

<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/robson-carvalho-souza/">
        <img src="https://avatars.githubusercontent.com/u/82351564?v=4" width="100px;" alt="Robson Carvalho Profile Picture"/><br>
        <sub>
          <b>Robson Carvalho</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request explaining your contribution

---

Made with ❤️ by [Robson Carvalho](https://www.linkedin.com/in/robson-carvalho-souza/).
