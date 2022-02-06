# Otp-Verification-Code-Matching
react native OTP verification code matching 
User can specify what the verification code's length will be, that many boxed will be generated
User can specify the boxes outer border color, the text color 
user will be able to use the codeinput like this

       <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          caretHidden={false}
          autoCapitalize={'none'}
          rootStyle={{ paddingTop: 20 }}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                {
                  width: 43,
                  height: 49,
                  lineHeight: 32,
                  fontSize: 32,
                  borderWidth: 0.7,
                  paddingTop: 11,
                  color: error.value ? theme.error : theme.text,
                  borderColor: theme.grey,
                  textAlign: 'center',
                  borderRadius: 8,
                  fontWeight: 'bold',
                  marginRight: 3.5,
                  marginLeft: 3.5,
                },
                isFocused && {
                  borderColor: theme.primary,
                  backgroundColor: theme.white,
                },
                error.value && { borderColor: theme.error },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol ||
                (isFocused ? (
                  <Text style={{ fontSize: 28, lineHeight: 28, marginTop: -9 }}>
                    <Cursor />
                  </Text>
                ) : null)}
            </Text>
          )}
        />

when in the renderCell, user game the error values, which is 
const initErrState = {
  value: false,
};
const [error, setError] = useState(initErrState);


when code doesnt match, user setstate the error.value to true, the boxes of the codefield turns red.and when user starts typing, it will turn back to the color user has set
where error makes the boxes red, and by typing anything it goes back to its default color
