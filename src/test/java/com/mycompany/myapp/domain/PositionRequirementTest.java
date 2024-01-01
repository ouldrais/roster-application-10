package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.PositionRequirementTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class PositionRequirementTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(PositionRequirement.class);
        PositionRequirement positionRequirement1 = getPositionRequirementSample1();
        PositionRequirement positionRequirement2 = new PositionRequirement();
        assertThat(positionRequirement1).isNotEqualTo(positionRequirement2);

        positionRequirement2.setId(positionRequirement1.getId());
        assertThat(positionRequirement1).isEqualTo(positionRequirement2);

        positionRequirement2 = getPositionRequirementSample2();
        assertThat(positionRequirement1).isNotEqualTo(positionRequirement2);
    }
}
