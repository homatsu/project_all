import React, { Component } from "react";

import "./Movie.css";

class GameList extends Component {
  state = {
    results: [
      {
        id: 3193,
        cover: {
          id: 3199,
          image_id: "onlimcrgz1zsngrffmql"
        },
        first_release_date: 1351555200,
        name: "Need for Speed: Most Wanted"
      },
      {
        id: 90,
        cover: {
          id: 91,
          image_id: "gsreqiarcoyh5mzcadht"
        },
        first_release_date: 809827200,
        name: "The Need for Speed"
      },
      {
        id: 103,
        cover: {
          id: 104,
          image_id: "r6ehvs7bvyrgijhsycyq"
        },
        first_release_date: 1257206400,
        name: "Need for Speed: Nitro"
      },
      {
        id: 104,
        cover: {
          id: 105,
          image_id: "paqxa2ggckpjljos8srg"
        },
        first_release_date: 1280188800,
        name: "Need for Speed: World"
      },
      {
        id: 93,
        cover: {
          id: 94,
          image_id: "uo9ysuzo94qrb6yhuxsg"
        },
        first_release_date: 916876800,
        name: "Need for Speed: High Stakes"
      },
      {
        id: 98,
        cover: {
          id: 17360,
          image_id: "i9nybooe1t3tve9yhyn0"
        },
        first_release_date: 1131667200,
        name: "Need for Speed: Most Wanted"
      },
      {
        id: 105,
        cover: {
          id: 9251,
          image_id: "cxnm0ptxfiuyhdo2bnml"
        },
        first_release_date: 1289865600,
        name: "Need for Speed: Hot Pursuit"
      },
      {
        id: 92,
        cover: {
          id: 93,
          image_id: "v2dmlrtbmee9gean1ncm"
        },
        first_release_date: 890784000,
        name: "Need for Speed III: Hot Pursuit"
      },
      {
        id: 7115,
        cover: {
          id: 7286,
          image_id: "lwfalejrw2nbz3bzmiw5"
        },
        first_release_date: 1301356800,
        name: "Need for Speed: Shift 2 Unleashed"
      },
      {
        id: 94,
        cover: {
          id: 95,
          image_id: "pqvucgkvbzp636himlof"
        },
        first_release_date: 948499200,
        name: "Need for Speed: Porsche Unleashed"
      }
    ],
    show: true
  };
  render() {
    return (
      <div className="gameListContainer">
        <ul className="gameList">
          {this.state.results.map(elem => (
            <li className="gameListElement">
              <div className="gameListImage">
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${
                    elem.cover.image_id
                  }.jpg`}
                  alt={`Poster for ${elem.name}`}
                />
              </div>
              <span className="gameListName">{elem.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GameList;
