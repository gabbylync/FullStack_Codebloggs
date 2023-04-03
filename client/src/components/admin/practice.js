return (
    <div style={{ marginLeft: '250px' }}>
        {bloggs.map((blogg, index) => {
            if (index === 0) {
                return (
                    <MDBRow key={index}>
                        <MDBCol sm='5'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardImage src={`https://picsum.photos/seed/${userActions.getRandomInt(100)}/300/100`} alt='...' position='top' />
                                    <MDBCardTitle>{user.first_name} {user.last_name}</MDBCardTitle>
                                    <MDBCardText>
                                        {user.status}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardImage src={`https://picsum.photos/seed/${userActions.getRandomInt(100)}/300/100`} alt='...' position='top' />
                                    <MDBCardTitle>{blogg.content}</MDBCardTitle>
                                    {/* <MDBCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText> */}
                                    <MDBBtn onClick={() => { handleCardClick(index) }}>Go somewhere</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='1'></MDBCol>
                    </MDBRow>
                )
            } else {
                return (
                    <MDBRow key={index}>
                        <MDBCol sm='5'>
                            <MDBCard>
                                {/* <MDBCardBody>
                                    <MDBCardImage src={`https://picsum.photos/seed/${getRandomInt(100)}/300/100`} alt='...' position='top' />
                                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                                    <MDBCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBBtn href='#'>Go somewhere</MDBBtn>
                                </MDBCardBody> */}
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardImage src={`https://picsum.photos/seed/${userActions.getRandomInt(100)}/300/100`} alt='...' position='top' />
                                    <MDBCardTitle>{blogg.content}</MDBCardTitle>
                                    {/* <MDBCardText>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText> */}
                                    <MDBBtn onClick={() => { handleCardClick(index) }}>Go somewhere</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='1'></MDBCol>
                    </MDBRow>
                )
            }
        })}
    </div>
)
















Message Del Barnwell



