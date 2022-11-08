import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'

const ThinnerCard = styled(Card)` // styling  the other card
width:400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="http://www.fillmurray.com/500/300"
        title="The card title"
        secondaryText="The secondary text"
        thumbnailUrl="http://www.fillmurray.com/100/100" />

      <Card
        title="Another card"
        secondaryText="Second card" />
    </div>
  )
}
