import ChevronLeft from 'public/assets/chervon-left.svg';
import {toast} from 'react-toastify';
import styled from 'styled-components';

const data = {
    EMAIL_FORM_ACTION:
        'https://script.google.com/macros/s/AKfycbxKg7lfAKoAVG8GiLV9ooNk01BLepCOZT5kDvrFbtigNhPn0yRCBZFZI9iM3rHGb5o3/exec',
    EMAIL_FORM_RECEIVER: 'truonghaibang1997@gmail.com'
};

const buttonStyle = {
    width: 95,
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    height: '48px'
};

const InputContainer = styled.div`
  position: relative;

  svg {
    margin-left: -24px;
  }

  white-space: nowrap;
`;

const Input = styled.input`
  max-width: 180px;
  height: 48px;
  border: none;
  outline: none;
  color: #858585;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  background: #171717;
  padding: 0 43px;
  
  @media (max-width: 1024){
    max-width: 150px;
  }

  &:after {
    content: '>';
  }

  @media (max-width: 768px) {
    width: calc(100% - 86px - 25px);
  }
`;

const EmailInput = () => {
    const submitForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const formData = new FormData();
        formData.append('email', email);

        const fetchApi = fetch(data.EMAIL_FORM_ACTION, {
            method: 'POST',
            body: formData
        });

        toast.promise(fetchApi, {
            pending: 'Please wait',
            success: 'Your email has been recorded. Thank you!',
            error: 'An error has been thrown. Please try again'
        });
    };

    return (
        <form
            onSubmit={submitForm}
            className="gform"
            method="POST"
            action={data.EMAIL_FORM_ACTION}
            data-email={data.EMAIL_FORM_RECEIVER}
        >
            <InputContainer>
                <Input type="email" name="email" placeholder="Your e-mail"/>
                <button type="submit" style={buttonStyle}>
                    <div id="con_wallet-txt" className="btn_b w-100">
                        <div className="btn_b--textwrap h-100">
                            <div id="con_wallet" className="btn_b--txt d-flex flex-column">
                                <div id='con_wallet' className='btn_b--txt d-flex flex-column'>
                                    <span>SUBSCRIBE</span>
                                </div>
                            </div>
                        </div>
                        <div className="btn_b--bgwrap">
                            <div className="btn_b--bg">
                                <div className="btn_b--fill no_full"></div>
                            </div>
                        </div>
                    </div>
                </button>
            </InputContainer>
        </form>
    );
};

export default EmailInput;
