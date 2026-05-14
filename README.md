# Fukui Bichiku Navi (Stockpiling Navi Echizen)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Fukui Bichiku Navi is a disaster preparedness website providing personalized emergency stockpiling information for Echizen City, Fukui. Based on Tokyo's open-source "Tokyo Bichiku Navi" project, it demonstrates municipal collaboration through shared digital resources.

## Demo

**[https://bichikunavi.code4fukui.org/](https://bichikunavi.code4fukui.org/)**

## Features

-   **Personalized Recommendations**: Generate a 1-week emergency stockpile list based on family size, age, and gender.
-   **Printable Cards**: Download cards for offline learning and games.
-   **Disaster Game**: Learn through the integrated "Saigaikun" game.
-   **Shelter Map**: View Echizen City's official evacuation shelter map.
-   **Accessibility**: Adjust text size and color schemes.
-   **Multilingual**: Available in Japanese and English.

## Open Data & Resources

-   **[Stockpile List](https://bichikunavi.code4fukui.org/opendata/list.html)**
    -   **[Images](https://github.com/code4fukui/fukui-bichiku-navi/tree/master/docs/opendata/img)**
-   **[Printable Cards](https://bichikunavi.code4fukui.org/opendata/card.html)** ([English](https://bichikunavi.code4fukui.org/opendata/card_en.html))
-   **[Saigaikun Game](https://github.com/code4fukui/saigaikun)**

## Development Setup

Built with [Nuxt.js](https://nuxtjs.org/).

```bash
# Clone the repository
git clone https://github.com/code4fukui/fukui-bichiku-navi.git
cd fukui-bichiku-navi

# Install dependencies
npm install

# Run the development server at http://localhost:3000
npm run dev

# Build for production (generates a static site in /docs)
npm run generate
```

## Project Members

-   [Echizen City Office](https://www.city.echizen.lg.jp/)
-   [Echizen City Disaster Prevention Volunteer Association](https://www.city.echizen.lg.jp/office/010/060/bousai/bousaisinokai.html)
-   [Fukui National College of Technology](https://www.fukui-nct.ac.jp/)
-   [Code for FUKUI](https://code4fukui.github.io/)

<details>
<summary>A Message from Tokyo Vice Governor Manabu Miyasaka</summary>

> Congratulations on the release of Stockpiling Navi Echizen. This project, based on Tokyo's open-source initiative, exemplifies how municipalities can share digital resources to enhance public services. By embracing open-source collaboration, we can accelerate administrative digitization and strengthen community resilience.
> 
> ---
> *Full message (transcribed from the [original video](https://www.city.echizen.lg.jp/office/010/021/bitikunavi.html)):*
> 
> Hello everyone. Today, I would like to send a message for the unveiling of the Stockpiling Navi Echizen, the Echizen city version. I am the Vice Governor of Tokyo, "Miyasaka", although I am a bit late. First of all, congratulations on the release.
>
> And combined with this Stockpiling Navi, I am very pleased that it was created based on the Tokyo Metropolitan Government's Stockpiling Navi, which we made as an open-source project. Using open source in the field of administration is becoming commonplace overseas, but in Japan it is still rare. I hope that in a few years it will become common and natural.
>
> As we are now promoting the digitization of administration, the most important thing is that the public servants who are working hard in each municipality and prefecture exchange and share their wisdom with each other, not just within their own jurisdiction. One of the most efficient ways to share this exchange is to make what we have created open source and share it. Then Echizen City can use what Tokyo has created, and if there are better functions in Echizen City, we can also incorporate them. If we do this, the power of the many public servants in Japan can be gathered together to accelerate digitization, so I think this is a wonderful initiative. I hope we can work together to promote the open source world in the future.
>
> Congratulations again today.

</details>

## License

MIT License — see [LICENSE](LICENSE).