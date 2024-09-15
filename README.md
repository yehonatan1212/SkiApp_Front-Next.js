## vision
🎿 users who rent or by skies can input there ski specs and get valuable insights on their equipment (compared to user height and weight). like suitable terrain, ski level etc... the ski is saved securly so the user can reffer to older gear and compare both specs and insights.

## overveiw
- **Server:** this repo contains only Front side. First run the Server Container. (server repo "yehonatan1212/SkiApp")
- **Styling:** using tailwind, dasyUI and svg. 
- **Auth:** sign in page, register page from whom we get the token and save in it in the sesion that we use to get to the user page.
- **user Page:** build from ski Cards. each card shows 1 ski and structered from varius componnents.
- **api:** are all build in server side, the general api func is in "app/lib/api.ts".

### notes & commands
- Open http://localhost:3000) with your browser to see the result.
- the client-server port is configed in ".env.local" file.
- edit only the files under app folder..
```
npm run dev    # to run dev app _very usful it compiles automatcly when aplying changes
npm run build  # to build the application for production usage
npm start      # to start a Next. js production server
```

### Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
