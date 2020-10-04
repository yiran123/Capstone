import water from '../static/icons/water.svg';
import sewer from '../static/icons/sewer.svg';
import porwer from '../static/icons/porwer.svg';
import sdg3 from '../static/icons/sdgs/E-WEB-Goal-03.png';
import sdg4 from '../static/icons/sdgs/E-WEB-Goal-04.png';
import sdg6 from '../static/icons/sdgs/E-WEB-Goal-06.png';


export const filterResults = [
  {
    title: 'Water Enterprise',
    enterprise: 'Water',
    titleIcon: water,
    bondRatings: [
      ['S&P', 'long term AA-', 'short term P-1'],
      ['Moody’s', 'long term Aa2', 'short term P-1'],
    ],
    seriesBg: '#1589EE',
    btnBt: '#E8F3FD',
    downloadBorderColor: '#1589EE',
    series: [
      {
        title: 'Series 2017G',
        bondType: 'Refunding Bond  •  2019',
        bondRating: ['S&P Bond rating', 'AAA'],
        projectNum: 200,
        CUSIP: 'DFS',
        UOP: '$125, 960, 401',
        AvgMaturity: '1.7%',
        sdgs: [
          sdg3,
          sdg4,
          sdg6,
        ]
      },
      {
        title: 'Series 2017G',
        bondType: 'Refunding Bond  •  2019',
        bondRating: ['S&P Bond rating', 'AAA'],
        projectNum: 200,
        CUSIP: 'DFS',
        UOP: '$125, 960, 401',
        AvgMaturity: '1.7%',
        sdgs: [
          sdg3,
          sdg4,
          sdg6,
        ]
      },
      {
        title: 'Series 2017G',
        bondType: 'Refunding Bond  •  2019',
        bondRating: ['S&P Bond rating', 'AAA'],
        projectNum: 200,
        CUSIP: 'DFS',
        UOP: '$125, 960, 401',
        AvgMaturity: '1.7%',
        sdgs: [
          sdg3,
          sdg4,
          sdg6,
        ]
      }
    ]
  },
  {
    title: 'Sewer Enterprise',
    enterprise: 'Waste Water',
    titleIcon: sewer,
    bondRatings: [
      ['Moody’s', 'long term Aa3', 'short term P-1'],
      ['S&P', 'long term AA', 'short term A-1'],
    ],
    btnBg: '#E8F3FD',
    seriesBg: '#1C9A4E',
    downloadBorderColor: '#1C9A4E',
    series: [
      {
        title: 'Series 2017G',
        bondType: 'Refunding Bond  •  2019',
        bondRating: ['S&P Bond rating', 'AAA'],
        projectNum: 200,
        CUSIP: 'DFS',
        UOP: '$125, 960, 401',
        AvgMaturity: '1.7%',
        sdgs: [
          sdg3,
          sdg4,
          sdg6,
        ]
      }
    ]
  },
  {
    title: 'Power Enterprise',
    titleIcon: porwer,
    enterprise: 'Power',
    bondRatings: [
      ['Moody’s', 'long term Aa3', 'short term P-1'],
      ['S&P', 'long term AA', 'short term A-1'],
    ],
    seriesBg: '#BE9220',
    butBg: '#EFDEB1',
    downloadBorderColor: '#BE9220',
    series: [
      {
        title: 'Series 2017G',
        bondType: 'Refunding Bond  •  2019',
        bondRating: ['S&P Bond rating', 'AAA'],
        projectNum: 200,
        CUSIP: 'DFS',
        UOP: '$125, 960, 401',
        AvgMaturity: '1.7%',
        sdgs: [
          sdg3,
          sdg4,
          sdg6,
        ]
      }
    ]
  }
]