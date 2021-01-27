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
          <!-- <SectionSubheader msg="YOUR E-MAIL"></SectionSubheader> -->
          <!-- <form action="#" method="GET">
            <input
              type="text"
              required="true"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </form> -->
          <FormulateForm>
            <FormulateInput
              type="email"
              name="email"
              validation="required|email"
              class="inputs"
            />
            <FormulateInput type="submit" label="CONTACT ME"></FormulateInput>
          </FormulateForm>

          <!-- <RegularButton
            redirect="#TODO"
            msg="MARCIN.W.MICHNA@GMAIL.COM"
          ></RegularButton> -->
        </div>
      </div>
      <div class="menuBlock">
        <div class="linksBlock">
          <SectionUpheader msg="QUICK LINKS"></SectionUpheader>
          <SectionHeader class="header" msg="MENU"></SectionHeader>
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
// import VueFormulate from "@braid/vue-formulate";

export default {
  components: {
    SectionUpheader,
    RegularButton,
    SectionHeader,
    SectionSubheader,
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
        font-size: 1.3rem;
        color: #5a6fe0;
        box-sizing: border-box;
        border: 1px solid #5a6fe0;
        background-color: #5a6fe0;
        // border-style: inset;
      }
      ::v-deep button::hover {
        opacity: 0.6;
      }
      ::v-deep .formulate-input-element--submit--label {
        color: white;
      }

      ::v-deep .inputs {
        width: 120%;
        // margin: 1px solid blue;
      }
      ::v-deep input {
        font-family: "Hind", serif;
        box-sizing: border-box;
        font-size: 1.3rem;
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
}
.header::before {
  width: 0 !important;
  height: 0 !important;
}
</style>
