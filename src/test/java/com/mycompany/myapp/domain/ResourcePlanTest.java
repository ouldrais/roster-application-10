package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ResourcePlanTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ResourcePlanTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResourcePlan.class);
        ResourcePlan resourcePlan1 = getResourcePlanSample1();
        ResourcePlan resourcePlan2 = new ResourcePlan();
        assertThat(resourcePlan1).isNotEqualTo(resourcePlan2);

        resourcePlan2.setId(resourcePlan1.getId());
        assertThat(resourcePlan1).isEqualTo(resourcePlan2);

        resourcePlan2 = getResourcePlanSample2();
        assertThat(resourcePlan1).isNotEqualTo(resourcePlan2);
    }
}
