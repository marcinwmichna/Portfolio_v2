<template>
  <section id="ContactMe">
    <div class="contentWrapper">
      <div class="contactBlock">
        <SectionUpheader msg="INTRESTED?"></SectionUpheader>
        <SectionHeader class="header" msg="LET'S WORK TOGETHER"></SectionHeader>
        <SectionSubheader
          class="subheader"
          msg="I’M AVAILABLE AND LOOKING FOR INTRESTING AND DEMANDING JOB. I’D LOVE TO TALK TO YOU!  "
        ></SectionSubheader>
        <SectionSubheader msg="YOUR EMAIL ADDRESS"></SectionSubheader>
        <div class="inputBlock">
          <FormulateForm @submit="submitHandler" #default="{ isLoading }">
            <FormulateInput
              type="email"
              name="email"
              validation="required|email"
              class="inputs"
            />
            <FormulateInput
              type="submit"
              :disabled="isLoading"
              :label="isLoading ? 'SENDING...' : 'SEND'"
            ></FormulateInput>
          </FormulateForm>
        </div>
      </div>
      <div class="menuBlock">
        <div class="linksBlock">
          <SectionUpheader msg="QUICK LINKS"></SectionUpheader>
          <SectionHeader class="header" msg="MENU"></SectionHeader>
          <div class="links">
            <RegularButton
              class="footerButton"
              redirect="#HowIWork"
              msg="HOW I WORK"
            ></RegularButton>
            <RegularButton
              class="footerButton"
              redirect="#RecentProjectsAndDesigns"
              msg="RECENT PROJECTS"
            ></RegularButton>
            <RegularButton
              class="footerButton"
              redirect="#AboutMe"
              msg="WORK EXPERIENCE"
            ></RegularButton>
            <RegularButton
              class="footerButton"
              redirect="#AboutMe"
              msg="EDUCATION"
            ></RegularButton>
          </div>
          <!-- <RegularButton redirect="#HowIWork" msg="MY SKILLS"></RegularButton> -->
        </div>
        <div class="socialBlock">
          <RegularButton
            class="footerButton"
            redirect="https://www.linkedin.com/in/marcinwmichna"
            msg="LINKEDIN"
          ></RegularButton>
          <RegularButton
            class="footerButton"
            redirect="https://www.github.com/marcinwmichna"
            msg="GITHUB"
          ></RegularButton>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SectionUpheader from "@/components/SectionUpheader.vue";
import RegularButton from "@/components/RegularButton.vue";
import SectionSubheader from "@/components/SectionSubheader.vue";
import axios from "axios";
// import VueFormulate from "@braid/vue-formulate";

const API_URL = "https://email-message.herokuapp.com/messages/";
export default {
  components: {
    SectionUpheader,
    RegularButton,
    SectionHeader,
    SectionSubheader,
  },
  methods: {
    async submitHandler(data) {
      await axios.post(API_URL, data);
      if (API_URL === undefined) {
        alert(`Thank you, ${data.email}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  margin-bottom: 0rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 70vw;
  max-width: 1100px;
  margin: auto;
  margin-top: 7rem;

  .contactBlock {
    margin-right: 10%;
    width: 100%;
    .subheader {
      margin-bottom: 4rem;
    }
    .formulate-form {
      display: flex;
      font-family: "Hind", serif;
      font-weight: 300;
      font-size: 1rem;
      margin-bottom: 4rem;

      ::v-deep button {
        margin-left: 1rem;
        padding: 1.2rem 3rem;
        white-space: nowrap;
        font-family: "Hind", serif;
        font-weight: 300;
        font-size: 1rem;
        color: #5a6fe0;
        box-sizing: border-box;
        border: 1px solid #5a6fe0;
        background-color: #5a6fe0;
        // border-style: inset;
      }
      ::v-deep button:hover {
        opacity: 0.97;
        cursor: pointer;
        transition: 100ms linear;
      }
      ::v-deep .formulate-input-element--submit--label {
        color: white;
      }
      ::v-deep .inputs {
        width: 100%;
      }
      ::v-deep input {
        font-family: "Hind", serif;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        border: 1px solid #e6e6e6;
        padding: 1.2rem;
        width: 100%;
        color: #353535;
      }
      ::v-deep input:focus {
        outline: #b4b4b4 !important;
        border: 1px solid #b4b4b4;
      }
      ::v-deep .formulate-input-errors {
        list-style: none;
        padding-left: 0;
        margin-top: 0.5rem;
        color: #d83c3c;
        text-transform: uppercase;
      }
    }
  }
  .menuBlock {
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    .linksBlock {
      margin-bottom: 3rem;
    }
    .button ::v-deep a {
      color: #424242;
    }
    .footerButton {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      ::v-deep a:hover {
        color: #293a96;
        transition: 100ms linear;
      }
    }
    .socialBlock {
      display: flex;
    }
    .socialBlock > h2:first-child {
      margin-right: 1rem;
    }
  }
}
#ContactMe {
  background: #f9f9f9;
  scroll-behavior: smooth;
}
.header::before {
  width: 0 !important;
  height: 0 !important;
}
@media screen and (max-width: 1000px) {
  .contentWrapper {
    display: flex;
    flex-direction: column;
    .contactBlock {
      margin: 0;
      .formulate-form {
        ::v-deep .inputs {
          width: 100%;
        }
      }
    }
  }
  .menuBlock {
    .linksBlock {
      h3:first-child {
        padding-top: 0;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .contentWrapper {
    width: 90vw !important;
    ::v-deep button {
      margin: 1rem 0 0 0 !important;
      width: 100% !important;
    }
  }
  .formulate-form {
    display: flex;
    flex-direction: column;
  }
}
</style>
