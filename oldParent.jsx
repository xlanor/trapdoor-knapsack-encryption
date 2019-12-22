<View style={{ flex:1, justifyContent:'flex-end'}}>

          {/* Callback function to hide the popup */}
          <AlertPopUp
              messageContent={popupMessage}
              callback={() => this.setState({ displayPopup: false })}
              visibility={displayPopup}
          />
          <View style={styles.learnParent.wrapperViewBackground}>
            {
              this.getImages()
            }
           
            {
              /* 
              <LearnTab/>
            <View
              style={styles.learnParent.borderLine}
            />
*/
            }
          </View>
          <View style={styles.learnParent.scrollViewBackground}>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
              <TextInput style={{borderColor: 'black', borderWidth: 2}}/>
            </View>

        </View>
        <View style={{ flex : 1 }} />