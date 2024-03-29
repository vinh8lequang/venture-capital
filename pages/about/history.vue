<template>
  <div class="pb-15 px-10">
    <div class="py-4">
      <!-- breadcrumbs component -->
      <div class="my-breadcrumbs">
        <span v-for="(item, index) in items" :key="index">
          <span v-if="!item.disabled">
            <router-link
              :to="item.href"
              :class="{
                'blue-link': index < items.length - 1,
                'last-link': index === items.length - 1,
              }"
              >{{ item.title }}</router-link
            >
          </span>
          <span v-else class="last-link">History</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="pb-15">
      <div class="p-4" style="display: flex; align-items: center">
        <v-card-title
          class="text-h6 text-md-h5 text-lg-h4"
          style="margin: 0 auto"
          >HISTORY</v-card-title
        >
      </div>

      <div class="d-flex justify-center">
        <!-- card with the history text -->
        <v-card width="50%" class="pa-5">
          <p>
            Horizon Equity Partners is a renowned venture capital firm that has
            been at the forefront of supporting innovative startups and
            entrepreneurs since its inception. With a rich history spanning
            several decades, the firm has consistently demonstrated a keen eye
            for identifying groundbreaking ideas and providing the necessary
            financial backing to turn those visions into successful businesses.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Founding and Early Years:</v-card-title
          >
          <p>
            Horizon Equity Partners was founded in the late 1980s by a group of
            visionary investors who recognized the immense potential of the
            emerging technology and innovation landscape. The founders,
            themselves experienced entrepreneurs and investors, sought to
            establish a venture capital firm that would bridge the gap between
            visionary ideas and the necessary capital to bring them to fruition.
          </p>
          <p>
            In its early years, Horizon Equity Partners focused primarily on the
            tech sector, as it was clear that advancements in technology would
            drive significant societal and economic change. The firm quickly
            gained a reputation for its ability to spot disruptive ideas and
            attract talented entrepreneurs, becoming a trusted partner for
            startups seeking financial and strategic support.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Expansion and Diversification:</v-card-title
          >
          <p>
            As Horizon Equity Partners gained traction and established a strong
            track record in the tech sector, the firm expanded its investment
            scope to encompass a broader range of industries. Recognizing that
            innovation could arise from various sectors, Horizon Equity Partners
            actively sought out opportunities in healthcare, clean energy,
            consumer products, and other emerging fields.
          </p>
          <p>
            This diversification strategy allowed Horizon Equity Partners to tap
            into new sources of potential growth and further enhance its
            reputation as a forward-thinking investment firm. By leveraging its
            extensive network of industry experts and seasoned advisors, the
            firm continued to identify and nurture promising startups with
            disruptive business models and technologies.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Growth and Success:</v-card-title
          >
          <p>
            Over the years, Horizon Equity Partners has achieved remarkable
            success in nurturing startups and helping them navigate the complex
            journey from early-stage ideation to market leadership. The firm's
            unique approach combines strategic guidance, operational expertise,
            and financial resources, enabling entrepreneurs to scale their
            ventures and realize their full potential.
          </p>
          <p>
            Horizon Equity Partners takes pride in its collaborative approach to
            investing, fostering strong relationships with founders and
            management teams. By providing more than just capital, the firm has
            become a trusted partner and advisor to its portfolio companies,
            supporting them through critical stages of growth and connecting
            them with valuable resources.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Notable Portfolio and Impact:</v-card-title
          >
          <p>
            Throughout its history, Horizon Equity Partners has built an
            impressive portfolio of successful investments, backing companies
            that have revolutionized industries and transformed the way we live
            and work. From groundbreaking tech startups to cutting-edge
            healthcare solutions and sustainable energy initiatives, the firm
            has played a significant role in shaping the future.
          </p>
          <p>
            The firm's investments have not only generated substantial returns
            for its limited partners but have also had a broader societal
            impact. Many of its portfolio companies have created job
            opportunities, stimulated economic growth, and contributed to
            technological advancements that have improved lives globally.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Continued Vision:</v-card-title
          >
          <p>
            As Horizon Equity Partners looks to the future, it remains committed
            to its core principles of vision and investment. The firm continues
            to stay ahead of emerging trends, constantly seeking out visionary
            entrepreneurs and disruptive ideas that have the potential to create
            significant value.
          </p>
          <p>
            Horizon Equity Partners prides itself on being more than just a
            financial partner; it aims to be a catalyst for growth and success.
            By combining its extensive industry knowledge, strategic insights,
            and financial acumen, the firm continues to be a trusted ally for
            ambitious entrepreneurs, helping them turn their visions into
            reality and shaping the future of innovation.
          </p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "About",
        disabled: false,
        href: "/about/history",
      },
      {
        title: "History",
        disabled: true,
        href: "/about/history",
      },
    ],
  }),
};
</script>

<style scoped>
.my-breadcrumbs {
  display: flex;
  align-items: center;
  padding-left: 0;
}

.my-breadcrumbs .divider {
  margin: 0 10px;
  color: #999;
}

.blue-link {
  color: #344c8e;
}

.last-link {
  color: rgb(55, 55, 55);
}
</style>
