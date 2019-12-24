 <View style={styles.learnTab.scrollViewWrapper}>

                {this.loadPage()}
              <View style={styles.learnTab.bottom}>
                  <View style={styles.learnTab.borderWrapper}>
                    <View style={styles.learnTab.leftArrowWrapper}>
                      {
                        this.isFirstPage()?
                        null:
                        <TouchableOpacity onPress = {()=>{
                            this.getTouchablePreviousAction()
                        }}>
                        <Image style={styles.learnTab.nextArrowSize} source={ BackArrow } />
                        </TouchableOpacity>
                      }
                    </View>
                    <View style={styles.learnTab.centerFooterWrapper}>
                      {/* To put the center footer here later. */}
                    </View>
                    <View style={styles.learnTab.rightArrowWrapper}>
                        {
                          this.isFinalPage()?
                          this.getNextTab():
                            this.canNavigate()?
                              <TouchableOpacity onPress = {()=>{
                                  this.getTouchableNextAction()
                              }}>
                                
                                <Image style={styles.learnTab.nextArrowSize} source={ FrontArrow} />
                              </TouchableOpacity>
                              : null
                        }
                    </View>
                  </View>
              </View>
            </View>
