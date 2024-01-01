package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.TeamPlanTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TeamPlanTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TeamPlan.class);
        TeamPlan teamPlan1 = getTeamPlanSample1();
        TeamPlan teamPlan2 = new TeamPlan();
        assertThat(teamPlan1).isNotEqualTo(teamPlan2);

        teamPlan2.setId(teamPlan1.getId());
        assertThat(teamPlan1).isEqualTo(teamPlan2);

        teamPlan2 = getTeamPlanSample2();
        assertThat(teamPlan1).isNotEqualTo(teamPlan2);
    }
}
