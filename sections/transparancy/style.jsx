import styled from "styled-components";

export const WrapHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: "teamdao", "Roboto", sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  min-height: calc(80vh - 100px);
  
  h2{
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  
  @media (max-width: 768px) {
    min-height: 400px;
  }
`


export const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  @media (max-width: 768px) {
    align-items: center;
  }

`

export const WrapHeroRight = styled.div`
  border-radius: 8px;
  background-color: rgba(51, 51, 51, 1);
  width: calc(95% + 8px);
  margin: -4px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 8px solid rgba(220, 213, 213, 0.1);
  
  
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const BoxHero = styled.div`
  display: flex;
  flex-direction: column;
  color: #cccccc;
  min-height: 80px;
  margin-bottom: 10px;
  font-family: "teamdao", "Roboto", sans-serif;
  

  h3 {
    font-size: 0.87rem;
    font-weight: 500;
    margin-bottom: 0;
    font-family: "teamdao", "Roboto", sans-serif;
  }

  p {
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    color: #cccccc;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }
`

export const SECTION = styled.section`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIwIiBoZWlnaHQ9IjcyMCIgdmlld0JveD0iMCAwIDcyMCA3MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIG9wYWNpdHk9IjAuMTYiPgo8cGF0aCBkPSJNNjAwIDQyMEM2MDAgNDUzLjEzNyA1NzMuMTM3IDQ4MCA1NDAgNDgwQzUwNi44NjMgNDgwIDQ4MCA0NTMuMTM3IDQ4MCA0MjBDNDgwIDM4Ni44NjMgNTA2Ljg2MyAzNjAgNTQwIDM2MEM1NzMuMTM3IDM2MCA2MDAgMzg2Ljg2MyA2MDAgNDIwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNMjQwIDU0MEMyNDAgNTczLjEzNyAyMTMuMTM3IDYwMCAxODAgNjAwQzE0Ni44NjMgNjAwIDEyMCA1NzMuMTM3IDEyMCA1NDBDMTIwIDUwNi44NjMgMTQ2Ljg2MyA0ODAgMTgwIDQ4MEMyMTMuMTM3IDQ4MCAyNDAgNTA2Ljg2MyAyNDAgNTQwWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8L2c+CjxwYXRoIGQ9Ik01NDAgMTIwQzU3My4xMzcgMTIwIDYwMCAxNDYuODYzIDYwMCAxODBINTQwVjEyMFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4KPHBhdGggZD0iTTU0MCAxODBMNTQwIDI0MEM1MDYuODYzIDI0MCA0ODAgMjEzLjEzNyA0ODAgMTgwTDU0MCAxODBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXIpIi8+CjxnIG9wYWNpdHk9IjAuMiI+CjxwYXRoIGQ9Ik0yNDAgNTQwQzI0MCA1MDYuODYzIDI2Ni44NjMgNDgwIDMwMCA0ODBMMzAwIDU0MEwyNDAgNTQwWiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyKSIvPgo8cGF0aCBkPSJNMzAwIDU0MEwzNjAgNTQwQzM2MCA1NzMuMTM3IDMzMy4xMzcgNjAwIDMwMCA2MDBMMzAwIDU0MFoiIGZpbGw9InVybCgjcGFpbnQ1X2xpbmVhcikiLz4KPC9nPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNNDgwIDM2MEM0MTMuNzI2IDM2MCAzNjAgNDEzLjcyNiAzNjAgNDgwTDQ4MCA0ODBMNDgwIDM2MFoiIGZpbGw9InVybCgjcGFpbnQ2X2xpbmVhcikiLz4KPC9nPgo8cGF0aCBkPSJNMjM5Ljc5NiAzNjAuMjA1QzI0MC4wMjIgNDI2LjQ3OSAyOTMuOTMxIDQ4MC4wMjEgMzYwLjIwNCA0NzkuNzk1TDM1OS43OTUgMzU5Ljc5NkwyMzkuNzk2IDM2MC4yMDVaIiBmaWxsPSJ1cmwoI3BhaW50N19saW5lYXIpIi8+CjxwYXRoIGQ9Ik02NjAgMjQwVjMwMEg3MjBMNjYwIDM2MFYzMDBINjAwTDY2MCAyNDBaIiBmaWxsPSJ1cmwoI3BhaW50OF9saW5lYXIpIi8+CjxnIG9wYWNpdHk9IjAuMiI+CjxwYXRoIGQ9Ik03MjAgMTgwQzcyMCAyMTMuMTM3IDY5My4xMzcgMjQwIDY2MCAyNDBDNjI2Ljg2MyAyNDAgNjAwIDIxMy4xMzcgNjAwIDE4MEM2MDAgMTQ2Ljg2MyA2MjYuODYzIDEyMCA2NjAgMTIwQzY5My4xMzcgMTIwIDcyMCAxNDYuODYzIDcyMCAxODBaIiBmaWxsPSJ1cmwoI3BhaW50OV9saW5lYXIpIi8+CjwvZz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTcyMCA0ODBDNzIwIDQxMy43MjYgNjY2LjI3NCAzNjAgNjAwIDM2MFY0ODBINzIwWiIgZmlsbD0idXJsKCNwYWludDEwX2xpbmVhcikiLz4KPC9nPgo8cGF0aCBkPSJNNjAwIDQ4MEg3MjBWNjAwSDYwMFY0ODBaIiBmaWxsPSJ1cmwoI3BhaW50MTFfbGluZWFyKSIvPgo8cGF0aCBkPSJNNzIwIDEyMFYwTDYwMCAxMjBINzIwWiIgZmlsbD0idXJsKCNwYWludDEyX2xpbmVhcikiLz4KPHBhdGggZD0iTTQ4MCAyNDBMNDgwIDM2MEw2MDAgMjQwTDQ4MCAyNDBaIiBmaWxsPSJ1cmwoI3BhaW50MTNfbGluZWFyKSIvPgo8ZyBvcGFjaXR5PSIwLjIiPgo8cGF0aCBkPSJNNDgwIDM2MEw0ODAgMjQwTDM2MCAzNjBMNDgwIDM2MFoiIGZpbGw9InVybCgjcGFpbnQxNF9saW5lYXIpIi8+CjwvZz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTQ4MCA2MDBMNjAwIDYwMEw0ODAgNDgwTDQ4MCA2MDBaIiBmaWxsPSJ1cmwoI3BhaW50MTVfbGluZWFyKSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuMiI+CjxwYXRoIGQ9Ik0zNjAgNjYwTDQyMCA2NjBMNDIwIDYwMEw0ODAgNjYwTDQyMCA2NjBMNDIwIDcyMEwzNjAgNjYwWiIgZmlsbD0idXJsKCNwYWludDE2X2xpbmVhcikiLz4KPC9nPgo8cGF0aCBkPSJNNjAwIDYwMEM1MzMuNzI2IDYwMCA0ODAgNjUzLjcyNiA0ODAgNzIwTDYwMCA3MjBMNjAwIDYwMFoiIGZpbGw9InVybCgjcGFpbnQxN19saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMjAgNzIwQzE4Ni4yNzQgNzIwIDI0MCA2NjYuMjc0IDI0MCA2MDBMMTIwIDYwMEwxMjAgNzIwWiIgZmlsbD0idXJsKCNwYWludDE4X2xpbmVhcikiLz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTcyMCA2NjBDNzIwIDY5My4xMzcgNjkzLjEzNyA3MjAgNjYwIDcyMEM2MjYuODYzIDcyMCA2MDAgNjkzLjEzNyA2MDAgNjYwQzYwMCA2MjYuODYzIDYyNi44NjMgNjAwIDY2MCA2MDBDNjkzLjEzNyA2MDAgNzIwIDYyNi44NjMgNzIwIDY2MFoiIGZpbGw9InVybCgjcGFpbnQxOV9saW5lYXIpIi8+CjwvZz4KPGcgb3BhY2l0eT0iMC4yIj4KPHBhdGggZD0iTTM2MCA3MjBMMzYwIDYwMEwyNDAgNzIwTDM2MCA3MjBaIiBmaWxsPSJ1cmwoI3BhaW50MjBfbGluZWFyKSIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuMiI+CjxwYXRoIGQ9Ik0xMjAgNzIwTDEyMCA2MDBMMS4wNDkwN2UtMDUgNzIwTDEyMCA3MjBaIiBmaWxsPSJ1cmwoI3BhaW50MjFfbGluZWFyKSIvPgo8L2c+CjxwYXRoIGQ9Ik0zNjAgNDgwVjYwMEw0ODAgNDgwSDM2MFoiIGZpbGw9InVybCgjcGFpbnQyMl9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjU4OC45OCIgeTE9IjQ3Ni4zMjciIHgyPSI0ODcuOTU5IiB5Mj0iNDY3Ljc1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMjguOTgiIHkxPSI1OTYuMzI2IiB4Mj0iMTI3Ljk1OSIgeTI9IjU4Ny43NTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iNTg4Ljk4IiB5MT0iMjM2LjMyNyIgeDI9IjQ4Ny45NTkiIHkyPSIyMjcuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjU4OC45OCIgeTE9IjIzNi4zMjciIHgyPSI0ODcuOTU5IiB5Mj0iMjI3Ljc1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXIiIHgxPSIzNTYuMzI3IiB5MT0iNDkxLjAyIiB4Mj0iMzQ3Ljc1NSIgeTI9IjU5Mi4wNDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyIiB4MT0iMzU2LjMyNyIgeTE9IjQ5MS4wMiIgeDI9IjM0Ny43NTUiIHkyPSI1OTIuMDQxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ2X2xpbmVhciIgeDE9IjQ3Ni4zMjciIHkxPSIzNzEuMDIiIHgyPSI0NjcuNzU1IiB5Mj0iNDcyLjA0MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50N19saW5lYXIiIHgxPSIyNTAuODI5IiB5MT0iMzYzLjg0MSIgeDI9IjM1MS44NzgiIHkyPSIzNzIuMDY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ4X2xpbmVhciIgeDE9IjYxMS4wMiIgeTE9IjM1Ni4zMjciIHgyPSI3MTIuMDQxIiB5Mj0iMzQ3Ljc1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50OV9saW5lYXIiIHgxPSI3MDguOTgiIHkxPSIyMzYuMzI3IiB4Mj0iNjA3Ljk1OSIgeTI9IjIyNy43NTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEwX2xpbmVhciIgeDE9IjcwOC45OCIgeTE9IjQ3Ni4zMjciIHgyPSI2MDcuOTU5IiB5Mj0iNDY3Ljc1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTFfbGluZWFyIiB4MT0iNzA4Ljk4IiB5MT0iNTk2LjMyNiIgeDI9IjYwNy45NTkiIHkyPSI1ODcuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxMl9saW5lYXIiIHgxPSI2MTEuMDIiIHkxPSIxMTYuMzI3IiB4Mj0iNzEyLjA0MSIgeTI9IjEwNy43NTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEzX2xpbmVhciIgeDE9IjU4OC45OCIgeTE9IjI0My42NzQiIHgyPSI0ODcuOTU5IiB5Mj0iMjUyLjI0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTRfbGluZWFyIiB4MT0iMzcxLjAyIiB5MT0iMzU2LjMyNyIgeDI9IjQ3Mi4wNDEiIHkyPSIzNDcuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxNV9saW5lYXIiIHgxPSI0ODMuNjc0IiB5MT0iNDkxLjAyIiB4Mj0iNDkyLjI0NSIgeTI9IjU5Mi4wNDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE2X2xpbmVhciIgeDE9IjQ3Ni4zMjciIHkxPSI3MDguOTgiIHgyPSI0NjcuNzU1IiB5Mj0iNjA3Ljk1OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTdfbGluZWFyIiB4MT0iNTk2LjMyNiIgeTE9IjYxMS4wMiIgeDI9IjU4Ny43NTUiIHkyPSI3MTIuMDQxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxOF9saW5lYXIiIHgxPSIxMjMuNjczIiB5MT0iNzA4Ljk4IiB4Mj0iMTMyLjI0NSIgeTI9IjYwNy45NTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE5X2xpbmVhciIgeDE9IjcwOC45OCIgeTE9IjcxNi4zMjciIHgyPSI2MDcuOTU5IiB5Mj0iNzA3Ljc1NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTZBNUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNGQzZDNiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MjBfbGluZWFyIiB4MT0iMjUxLjAyIiB5MT0iNzE2LjMyNyIgeDI9IjM1Mi4wNDEiIHkyPSI3MDcuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyMV9saW5lYXIiIHgxPSIxMS4wMjA0IiB5MT0iNzE2LjMyNyIgeDI9IjExMi4wNDEiIHkyPSI3MDcuNzU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNkE1QTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0ZDNkM2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyMl9saW5lYXIiIHgxPSI0NjguOTgiIHkxPSI0ODMuNjc0IiB4Mj0iMzY3Ljk1OSIgeTI9IjQ5Mi4yNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2QTVBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRkM2QzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K);
  min-height: calc(80vh - 100px);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  margin-top: -20px;
`

export const SECTION_TAB_SECTION = styled.section`
  background: #000000;
  padding: 60px 0;
`;

export const BUTTON_TAB = styled.button`
  padding: 20px 40px;
  background: #333333;
  border: none;
  color: #ffffff;
  font-family: "teamdao", "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  outline: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TAB_GROUP = styled.div`
  display: flex;
  justify-content: center;
  background: #333333;
  width: fit-content;
  margin: -90px auto 0;
  border-radius: 10px;

  .active {
    border-bottom: 2px solid #0fc713;
    color: #0fc713;
    font-weight: 600;
  }
`;

export const WraperPanel = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  font-family: "teamdao", "Roboto", sans-serif;

  p {
    font-family: "teamdao", "Roboto", sans-serif;
    margin-bottom: 20px;
  }
`;
export const TabWrapperPanel = styled.div`
  background: #333333;
`;

export const TAB_GROUP_Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #333333;
  width: 100%;

  button {
    flex-grow: 1;
    max-width: none;
    flex-basis: 0;
    flex-shrink: 1;
  }

  .active {
    border-bottom: 2px solid #0fc713;
    color: #0fc713;
    font-weight: 600;
  }
`;

export const PanelEntry = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  color: #ffffff;

  div {
    flex-grow: 1;
    max-width: none;
    flex-basis: 0;
    flex-shrink: 1;
  }
`;

export const EntryBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #434343;
  padding: 5px 10px;
  font-family: "teamdao", "Roboto", sans-serif;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 5px;

  .bar {
    flex-grow: 1;
    max-width: none;
    flex-basis: 0;
    flex-shrink: 1;
    background: #b5ecb7;
    height: 5px;
    border-radius: 10px;

    .bar-inner {
      background: rgba(50, 178, 53, 0.54);
      height: 5px;
      border-radius: 10px;
    }
  }
`;

export const EntryTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-family: "teamdao", "Roboto", sans-serif;
    color: #cccccc;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const ReportEntry = styled.div`
  padding: 40px;
  font-family: "teamdao", "Roboto", sans-serif;

  h3 {
    margin-bottom: 20px;
  }

  .wrap-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .box {
    background: #434343;
    border: 1px solid #434343;
    padding: 5px;
  }

  .more {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #ffffff;
    }
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: #fafafa;
  }

  .text h6 {
    margin-top: 10px;
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .text p {
    color: #cccccc;
    font-size: 14px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ReverseBreakdown = styled.div`
  padding: 40px;

  .cash_detail {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 767px) {
      display: none;
    }

    h6 {
      color: #fafafa;
      max-width: 220px;
      margin-right: 15px;
      margin-bottom: 20px;
    }
  }

  .lines {
    width: 100%;
    height: 10px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;


    > * {
      border: 1px solid #333333;
      align-self: stretch;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const PanelReport = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;

`;

export const Legends = styled.div`
  display: flex;
  flex-direction: row;

  .legend {
    margin-right: 7px;

    .top {
      display: flex;
      flex-direction: row;
      align-items: start;

      p {
        color: #ffffff;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 0;
      }
    }

    .description {
      font-size: 14px;
      color: #cccccc;
    }

    .color {
      width: 10px;
      height: 10px;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
`;

export const LockedAsset = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  h4 {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .wrap-box {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 720px) {
      flex-direction: column;
    }

    .left-wrap, .right-wrap {
      width: 48%;
      @media (max-width: 720px) {
        width: 100%;
      }
    }

    .mid-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 720px) {
        .ico {
          transform: rotate(90deg);
        }
      }
    }

    .box {
      display: flex;
      flex-direction: row;
      padding: 10px;
      justify-content: space-between;
      margin-bottom: 20px;
      background: rgb(33, 37, 41);


      .left {
        display: flex;
        flex-direction: column;

        p {
          margin: 0;
        }

        .address {
          color: #cccccc;
          font-size: 14px;
          margin-bottom: 5px;
          margin-top: 8px;
        }
      }

      .group-btn {
        display: flex;
        flex-direction: row;
        gap: 10px;

        button {
          padding: 10px;
          background: transparent;
          border: none;
          color: #2afe30;
        }
      }
    }


  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-family: 'teamdao', 'Roboto Mono', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: white;

  ul {
    list-style: none;
    padding-left: 14px;
    li {
      margin-bottom: 20px;
    }
    li:before {
      content: '■';
      color: #00ff19;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;